// Persistencia de habitaciones en un archivo JSON.
// Cumple el mismo contrato que tendrá el repositorio de SQL Server más adelante
// (listar / buscarPorNumero / guardar), así el servicio no cambia.
const fs = require('node:fs/promises');

class HabitacionesRepositorioJSON {
    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
    }

    async #leer() {
        try {
            const contenido = await fs.readFile(this.rutaArchivo, 'utf8');
            return JSON.parse(contenido);
        } catch (error) {
            if (error.code === 'ENOENT') return [];
            throw error;
        }
    }

    async #escribir(habitaciones) {
        await fs.writeFile(this.rutaArchivo, JSON.stringify(habitaciones, null, 2), 'utf8');
    }

    async listar() {
        return this.#leer();
    }

    async buscarPorNumero(numero) {
        const habitaciones = await this.#leer();
        return habitaciones.find((h) => h.numero === numero) ?? null;
    }

    async guardar(habitacion) {
        const habitaciones = await this.#leer();
        const indice = habitaciones.findIndex((h) => h.numero === habitacion.numero);
        if (indice >= 0) {
            habitaciones[indice] = habitacion;
        } else {
            habitaciones.push(habitacion);
        }
        await this.#escribir(habitaciones);
    }
}

module.exports = { HabitacionesRepositorioJSON };
