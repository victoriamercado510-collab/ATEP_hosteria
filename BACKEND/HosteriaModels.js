// Catálogo de estados válidos para las habitaciones
const EstadoHabitacion = {
    LIBRE: "libre",
    OCUPADA: "ocupada",
    EN_LIMPIEZA: "en_limpieza",
    CLAUSURADA: "clausurada"
};

function obtenerPresentacion(estado) {
    switch (estado) {
        case EstadoHabitacion.LIBRE:
            return { etiqueta: "Libre", color: "Verde" };
        case EstadoHabitacion.OCUPADA:
            return { etiqueta: "Ocupada", color: "Rojo" };
        case EstadoHabitacion.EN_LIMPIEZA:
            return { etiqueta: "En limpieza", color: "Amarillo" };
        case EstadoHabitacion.CLAUSURADA:
            return { etiqueta: "Clausurada", color: "Gris" };
        default:
            return { etiqueta: "Estado no válido", color: "Sin color" };
    }
}

module.exports = { EstadoHabitacion, obtenerPresentacion };