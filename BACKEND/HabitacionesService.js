// Reglas para consultar y cambiar habitaciones.
// Depende de un "repositorio" con este contrato (inversión de dependencias):
//   listar(): Promise<Habitacion[]>
//   buscarPorNumero(numero): Promise<Habitacion|null>
//   guardar(habitacion): Promise<void>
const {
    ErrorValidacion,
    validarHabitacion,
    presentacionEstado,
    limpiezaTerminada,
} = require('./HosteriaModels');

class ErrorNoEncontrada extends Error {
    constructor(numero) {
        super(`No existe la habitación ${numero}`);
        this.name = 'ErrorNoEncontrada';
    }
}

class HabitacionesService {
    constructor(repositorio, reloj = () => new Date()) {
        this.repositorio = repositorio;
        this.reloj = reloj;
    }

    async listar() {
        const habitaciones = await this.repositorio.listar();
        return habitaciones
            .map((h) => ({ ...h, presentacion: presentacionEstado(h.estado) }))
            .sort((a, b) => a.numero - b.numero);
    }

    async registrar(datos) {
        const habitacion = validarHabitacion(datos);
        const existente = await this.repositorio.buscarPorNumero(habitacion.numero);
        if (existente) {
            throw new ErrorValidacion(`Ya existe la habitación ${habitacion.numero}`);
        }
        await this.repositorio.guardar(habitacion);
        return habitacion;
    }

    async cambiarEstado(numero, nuevoEstado) {
        const actual = await this.repositorio.buscarPorNumero(numero);
        if (!actual) {
            throw new ErrorNoEncontrada(numero);
        }
        const actualizada = validarHabitacion({ ...actual, estado: nuevoEstado });

        if (actual.estado === 'en_limpieza' && nuevoEstado === 'libre' && !limpiezaTerminada(this.reloj())) {
            throw new ErrorValidacion('La limpieza termina a las 10:30; todavía no se puede marcar como libre');
        }

        // Si guardar falla, el error se propaga: nunca se informa éxito sin persistir.
        await this.repositorio.guardar(actualizada);
        return actualizada;
    }

    // Las habitaciones no se borran físicamente: se clausuran.
    async eliminar() {
        throw new ErrorValidacion('Las habitaciones no se eliminan; usar el estado "clausurada"');
    }
}

module.exports = { HabitacionesService, ErrorNoEncontrada };
