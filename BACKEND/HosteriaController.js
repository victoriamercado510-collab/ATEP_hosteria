// Controlador HTTP de la Hostería (panel de habitaciones).
// Traduce pedidos HTTP a llamadas al servicio; no contiene reglas de negocio.
const { ErrorValidacion } = require('./HosteriaModels');
const { ErrorNoEncontrada } = require('./HabitacionesService');

function responder(res, status, cuerpo) {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(cuerpo));
}

function leerCuerpo(req) {
    return new Promise((resolve, reject) => {
        let datos = '';
        req.on('data', (parte) => { datos += parte; });
        req.on('end', () => {
            try {
                resolve(datos ? JSON.parse(datos) : {});
            } catch {
                reject(new ErrorValidacion('El cuerpo del pedido no es JSON válido'));
            }
        });
        req.on('error', reject);
    });
}

function crearControlador(servicio) {
    return async function manejar(req, res) {
        try {
            const url = new URL(req.url, 'http://localhost');

            if (req.method === 'GET' && url.pathname === '/api/habitaciones') {
                return responder(res, 200, await servicio.listar());
            }

            const coincidencia = url.pathname.match(/^\/api\/habitaciones\/(\d+)\/estado$/);
            if (req.method === 'PATCH' && coincidencia) {
                const { estado } = await leerCuerpo(req);
                const actualizada = await servicio.cambiarEstado(Number(coincidencia[1]), estado);
                return responder(res, 200, actualizada);
            }

            return responder(res, 404, { error: 'Ruta no encontrada' });
        } catch (error) {
            if (error instanceof ErrorValidacion) return responder(res, 400, { error: error.message });
            if (error instanceof ErrorNoEncontrada) return responder(res, 404, { error: error.message });
            return responder(res, 500, { error: 'No se pudo completar la operación' });
        }
    };
}

module.exports = { crearControlador };
