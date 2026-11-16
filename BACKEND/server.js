// Arma la aplicación: repositorio → servicio → controlador → servidor HTTP.
const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const { HabitacionesRepositorioJSON } = require('./HabitacionesRepositorioJSON');
const { HabitacionesService } = require('./HabitacionesService');
const { crearControlador } = require('./HosteriaController');

function crearServidor({ rutaDatos, reloj } = {}) {
    const repositorio = new HabitacionesRepositorioJSON(rutaDatos);
    const servicio = new HabitacionesService(repositorio, reloj);
    return http.createServer(crearControlador(servicio));
}

if (require.main === module) {
    const rutaDatos = process.env.DATA_FILE || path.join(__dirname, '..', 'data', 'habitaciones.json');
    if (!fs.existsSync(rutaDatos)) {
        fs.copyFileSync(path.join(__dirname, '..', 'data', 'habitaciones.ejemplo.json'), rutaDatos);
    }
    const puerto = Number(process.env.PORT) || 3000;
    crearServidor({ rutaDatos }).listen(puerto, () => {
        console.log(`Hostería ATEP — API en http://localhost:${puerto}/api/habitaciones`);
    });
}

module.exports = { crearServidor };
