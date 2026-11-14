// PRUEBAS UNITARIAS del servicio, aislado con dobles de prueba:
// - el repositorio (que en producción toca archivo/BD) se reemplaza por un STUB/MOCK en memoria;
// - el reloj se reemplaza por un STUB con hora fija.
const { describe, it, mock } = require('node:test');
const assert = require('node:assert/strict');
const { HabitacionesService, ErrorNoEncontrada } = require('../../BACKEND/HabitacionesService');
const { ErrorValidacion } = require('../../BACKEND/HosteriaModels');

function repoFalso(habitaciones = []) {
    const datos = habitaciones.map((h) => ({ ...h }));
    return {
        listar: mock.fn(async () => datos),
        buscarPorNumero: mock.fn(async (n) => datos.find((h) => h.numero === n) ?? null),
        guardar: mock.fn(async () => {}),
    };
}
const relojA = (h, m) => () => new Date(2026, 10, 13, h, m);

describe('R4 — El encargado cambia el estado de una habitación y se guarda', () => {
    it('S1 [esperado] cambia de ocupada a en_limpieza y llama a guardar una vez', async () => {
        const repo = repoFalso([{ numero: 2, estado: 'ocupada', camas: 3, plazas: 4 }]);
        const servicio = new HabitacionesService(repo, relojA(10, 5));

        const resultado = await servicio.cambiarEstado(2, 'en_limpieza');

        assert.equal(resultado.estado, 'en_limpieza');
        assert.equal(repo.guardar.mock.callCount(), 1);
        assert.deepEqual(repo.guardar.mock.calls[0].arguments[0], {
            numero: 2, estado: 'en_limpieza', camas: 3, plazas: 4,
        });
    });

    it('S2 [error] estado inválido: se rechaza y NO se guarda nada', async () => {
        const repo = repoFalso([{ numero: 1, estado: 'libre' }]);
        const servicio = new HabitacionesService(repo);

        await assert.rejects(servicio.cambiarEstado(1, 'reservada'), ErrorValidacion);
        assert.equal(repo.guardar.mock.callCount(), 0);
    });

    it('S3 [error] habitación inexistente devuelve ErrorNoEncontrada', async () => {
        const servicio = new HabitacionesService(repoFalso([]));
        await assert.rejects(servicio.cambiarEstado(99, 'libre'), ErrorNoEncontrada);
    });

    it('S4 [error] si la persistencia falla, el error llega al usuario (no se muestra éxito)', async () => {
        const repo = repoFalso([{ numero: 1, estado: 'libre' }]);
        repo.guardar = mock.fn(async () => { throw new Error('disco lleno'); });
        const servicio = new HabitacionesService(repo);

        await assert.rejects(servicio.cambiarEstado(1, 'ocupada'), /disco lleno/);
    });

    it('S5 [esperado] camas y plazas vacías no bloquean el cambio de estado', async () => {
        const repo = repoFalso([{ numero: 4, estado: 'clausurada', camas: null, plazas: null }]);
        const servicio = new HabitacionesService(repo);

        const resultado = await servicio.cambiarEstado(4, 'libre');
        assert.equal(resultado.estado, 'libre');
    });
});

describe('R5 — De en_limpieza a libre solo desde las 10:30', () => {
    it('S6 [límite] 10:29 → se rechaza y no se guarda', async () => {
        const repo = repoFalso([{ numero: 3, estado: 'en_limpieza' }]);
        const servicio = new HabitacionesService(repo, relojA(10, 29));

        await assert.rejects(servicio.cambiarEstado(3, 'libre'), /10:30/);
        assert.equal(repo.guardar.mock.callCount(), 0);
    });

    it('S7 [límite] 10:30 → se permite', async () => {
        const repo = repoFalso([{ numero: 3, estado: 'en_limpieza' }]);
        const servicio = new HabitacionesService(repo, relojA(10, 30));

        assert.equal((await servicio.cambiarEstado(3, 'libre')).estado, 'libre');
    });

    it('S8 [esperado] la regla no afecta otros cambios (en_limpieza → clausurada a las 9:00)', async () => {
        const repo = repoFalso([{ numero: 3, estado: 'en_limpieza' }]);
        const servicio = new HabitacionesService(repo, relojA(9, 0));

        assert.equal((await servicio.cambiarEstado(3, 'clausurada')).estado, 'clausurada');
    });
});

describe('R6 — Número único y sin borrado físico', () => {
    it('S9 [error] registrar un número que ya existe se rechaza', async () => {
        const repo = repoFalso([{ numero: 1, estado: 'libre' }]);
        const servicio = new HabitacionesService(repo);

        await assert.rejects(servicio.registrar({ numero: 1, estado: 'ocupada' }), /Ya existe/);
        assert.equal(repo.guardar.mock.callCount(), 0);
    });

    it('S10 [error] eliminar una habitación no está permitido', async () => {
        const servicio = new HabitacionesService(repoFalso([{ numero: 1, estado: 'libre' }]));
        await assert.rejects(servicio.eliminar(1), /clausurada/);
    });
});

describe('R2 — El listado incluye la presentación de cada estado', () => {
    it('S11 [esperado] lista ordenada por número y con etiqueta/color', async () => {
        const repo = repoFalso([
            { numero: 3, estado: 'en_limpieza' },
            { numero: 1, estado: 'libre' },
        ]);
        const lista = await new HabitacionesService(repo).listar();

        assert.deepEqual(lista.map((h) => h.numero), [1, 3]);
        assert.equal(lista[1].presentacion.etiqueta, 'En limpieza');
    });
});
