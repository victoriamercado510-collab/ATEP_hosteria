const { EstadoHabitacion, obtenerPresentacion } = require('./HosteríaModels');

// Simulación de un repositorio en memoria para el ejemplo
const repositorioHabitaciones = {
    obtenerPorNumero: (numero) => {
        return { numero: numero, estado: EstadoHabitacion.LIBRE };
    },
    actualizar: (habitacion) => {
        return true;
    }
};

// Servicio que valida y realiza el cambio de estado
function cambiarEstadoHabitacion(numero, nuevoEstado) {
    // Validar que el estado pertenezca a los definidos
    const estadosValidos = Object.values(EstadoHabitacion);
    if (!estadosValidos.includes(nuevoEstado)) {
        return false; // Rechaza valores no válidos
    }

    const habitacion = repositorioHabitaciones.obtenerPorNumero(numero);
    if (!habitacion) {
        return false; // Si no existe la habitación
    }

    habitacion.estado = nuevoEstado;
    return repositorioHabitaciones.actualizar(habitacion);
}

module.exports = { cambiarEstadoHabitacion };
