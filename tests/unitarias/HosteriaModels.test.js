// PRUEBAS UNITARIAS — reglas puras del dominio (sin BD, sin red, sin otros módulos).
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const {
    ESTADOS,
    esEstadoValido,
    presentacionEstado,
    validarHabitacion,
    limpiezaTerminada,
    ErrorValidacion,
} = require('../../BACKEND/HosteriaModels');

const hora = (h, m) => new Date(2026, 10, 13, h, m);

describe('R1 — Solo se aceptan los cuatro estados acordados', () => {
    it('U1 [esperado] los cuatro estados son válidos', () => {
        for (const estado of ['libre', 'ocupada', 'en_limpieza', 'clausurada']) {
            assert.equal(esEstadoValido(estado), true);
        }
        assert.equal(Object.keys(ESTADOS).length, 4);
    });

    it('U2 [error] un estado fuera del catálogo se rechaza', () => {
        assert.equal(esEstadoValido('reservada'), false);
        assert.throws(() => validarHabitacion({ numero: 1, estado: 'reservada' }), ErrorValidacion);
    });

    it('U3 [límite] distingue mayúsculas y formato: "Libre" o "en limpieza" no son válidos', () => {
        assert.equal(esEstadoValido('Libre'), false);
        assert.equal(esEstadoValido('en limpieza'), false);
        assert.equal(esEstadoValido(''), false);
    });
});

describe('R2 — Cada estado tiene una etiqueta y un color definidos una sola vez', () => {
    it('U4 [esperado] en_limpieza se muestra como "En limpieza" en amarillo', () => {
        assert.deepEqual(presentacionEstado('en_limpieza'), {
            valor: 'en_limpieza', etiqueta: 'En limpieza', color: 'amarillo',
        });
    });

    it('U5 [esperado] todos los estados tienen texto además del color', () => {
        for (const estado of Object.keys(ESTADOS)) {
            assert.ok(presentacionEstado(estado).etiqueta.length > 0);
        }
    });
});

describe('R3 — Número obligatorio; camas y plazas opcionales', () => {
    it('U6 [esperado] una habitación sin camas ni plazas es válida', () => {
        assert.deepEqual(validarHabitacion({ numero: 5, estado: 'libre' }), {
            numero: 5, estado: 'libre', camas: null, plazas: null,
        });
    });

    it('U7 [error] sin número de habitación se rechaza', () => {
        assert.throws(() => validarHabitacion({ estado: 'libre' }), ErrorValidacion);
    });

    it('U8 [límite] número 0, negativo o decimal se rechaza; 1 es aceptado', () => {
        assert.throws(() => validarHabitacion({ numero: 0, estado: 'libre' }), ErrorValidacion);
        assert.throws(() => validarHabitacion({ numero: -3, estado: 'libre' }), ErrorValidacion);
        assert.throws(() => validarHabitacion({ numero: 1.5, estado: 'libre' }), ErrorValidacion);
        assert.equal(validarHabitacion({ numero: 1, estado: 'libre' }).numero, 1);
    });

    it('U9 [límite] camas = 0 es válido; camas negativas no', () => {
        assert.equal(validarHabitacion({ numero: 2, estado: 'libre', camas: 0 }).camas, 0);
        assert.throws(() => validarHabitacion({ numero: 2, estado: 'libre', camas: -1 }), ErrorValidacion);
    });
});

describe('R5 — Regla de limpieza: termina a las 10:30', () => {
    it('U10 [límite] a las 10:29 la limpieza no terminó', () => {
        assert.equal(limpiezaTerminada(hora(10, 29)), false);
    });

    it('U11 [límite] a las 10:30 en punto la limpieza terminó', () => {
        assert.equal(limpiezaTerminada(hora(10, 30)), true);
    });

    it('U12 [esperado] a la tarde la limpieza ya terminó', () => {
        assert.equal(limpiezaTerminada(hora(15, 0)), true);
    });
});
