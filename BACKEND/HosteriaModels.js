// Reglas del dominio "Habitaciones" — fuente única (DRY), según README:
// cuatro estados válidos, número obligatorio y único, camas/plazas opcionales.

const ESTADOS = Object.freeze({
    libre:       { etiqueta: 'Libre',       color: 'verde' },
    ocupada:     { etiqueta: 'Ocupada',     color: 'rojo' },
    en_limpieza: { etiqueta: 'En limpieza', color: 'amarillo' },
    clausurada:  { etiqueta: 'Clausurada',  color: 'gris' },
});

// Horarios de la hostería (sin valores mágicos): salida 10:00, limpieza hasta 10:30.
const HORA_SALIDA = { horas: 10, minutos: 0 };
const FIN_LIMPIEZA = { horas: 10, minutos: 30 };

class ErrorValidacion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = 'ErrorValidacion';
    }
}

function esEstadoValido(estado) {
    return Object.prototype.hasOwnProperty.call(ESTADOS, estado);
}

function presentacionEstado(estado) {
    if (!esEstadoValido(estado)) {
        throw new ErrorValidacion(`Estado inválido: "${estado}"`);
    }
    return { valor: estado, ...ESTADOS[estado] };
}

function validarHabitacion(datos) {
    if (!datos || !Number.isInteger(datos.numero) || datos.numero <= 0) {
        throw new ErrorValidacion('El número de habitación es obligatorio y debe ser un entero positivo');
    }
    if (!esEstadoValido(datos.estado)) {
        throw new ErrorValidacion(`Estado inválido: "${datos.estado}"`);
    }
    for (const campo of ['camas', 'plazas']) {
        const valor = datos[campo];
        if (valor !== undefined && valor !== null && (!Number.isInteger(valor) || valor < 0)) {
            throw new ErrorValidacion(`"${campo}" debe ser un entero mayor o igual a 0`);
        }
    }
    return {
        numero: datos.numero,
        estado: datos.estado,
        camas: datos.camas ?? null,
        plazas: datos.plazas ?? null,
    };
}

// Decisión de negocio (pendiente de confirmar con la hostería):
// una habitación "en_limpieza" no puede pasar a "libre" antes de las 10:30.
function limpiezaTerminada(ahora) {
    const minutos = ahora.getHours() * 60 + ahora.getMinutes();
    return minutos >= FIN_LIMPIEZA.horas * 60 + FIN_LIMPIEZA.minutos;
}

module.exports = {
    ESTADOS,
    HORA_SALIDA,
    FIN_LIMPIEZA,
    ErrorValidacion,
    esEstadoValido,
    presentacionEstado,
    validarHabitacion,
    limpiezaTerminada,
};
