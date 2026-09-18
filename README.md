 Sistema de Gestión de Reservas - Hostería

## Descripción del proyecto

El proyecto consiste en el desarrollo de un sistema digital destinado a la gestión integral de reservas, control de habitaciones y administración de huéspedes para la hostería. Su propósito principal es organizar y facilitar la administración de la disponibilidad, las tarifas diferenciales y el registro de los visitantes.

El sistema busca resolver la problemática de llevar un control manual y desordenado de las reservas, evitando la superposición de fechas en una misma habitación y permitiendo consultar de manera sencilla la información histórica y actual disponible.

Entre las principales funcionalidades previstas se encuentra la posibilidad de registrar y administrar los datos de los huéspedes (afiliados y no afiliados), gestionar las habitaciones según su tipo y capacidad, y realizar operaciones relacionadas con las reservas y sus tarifas correspondientes. El sistema permitirá verificar la disponibilidad de espacio, registrar estadas y modificar la información cuando sea necesario.

Además, se busca que el proyecto tenga una estructura organizada y escalable, de manera que cada componente (frontend y backend) tenga una responsabilidad definida. Esto facilitará el desarrollo, el mantenimiento y futuras ampliaciones del sistema.

## Objetivos específicos

* Gestionar los datos de los huéspedes, permitiendo registrar y consultar la información de personas afiliadas y no afiliadas.
* Gestionar las habitaciones de la hostería, registrando su número, ubicación, capacidad, tipo y disponibilidad.
* Registrar y administrar las reservas, asociando los datos del huésped con la habitación y las fechas de ingreso y egreso.
* Controlar la disponibilidad y los precios de las habitaciones, teniendo en cuenta las fechas de la reserva y si el huésped es afiliado o no afiliado.

## Estructura del proyecto

* `BACKEND/` : código correspondiente al servidor, controladores y lógica de negocio del sistema.
* `FRONTEND/` : interfaz de usuario, páginas HTML y archivos de estilos (`style.css`).
* `database/` : scripts, modelos y archivos relacionados con la base de datos.
* `docs/` : documentación del proyecto, informes y guías del trabajo práctico.
4. Estructura del proyecto

   Arquitectura del sistema
El proyecto será desarrollado como un sistema web, utilizando:
- HTML: estructura y contenido de las páginas.
- CSS: diseño y apariencia visual de la interfaz.
- JavaScript: funcionalidades, validaciones e interacción del sistema.
- Base de datos: almacenamiento de la información de huéspedes, habitaciones y reservas.
La estructura general será:
              SISTEMA WEB
                   │
          ┌────────┴────────┐
          │                 │
        HTML               CSS
   Estructura de       Diseño visual
      páginas               │
          │                 │
          └────────┬────────┘
                   │
              JavaScript
          Funcionalidades
                   │
                   ▼
              BASE DE DATOS
4.2 Módulos principales
Módulo de huéspedes
- Registrar huéspedes.
- Consultar y modificar sus datos.
Módulo de habitaciones
- Registrar las habitaciones.
- Indicar número, ubicación, capacidad y distribución de camas.
- Consultar su disponibilidad.
Módulo de reservas
- Crear reservas.
- Asociar huésped y habitación.
- Registrar fecha de ingreso y egreso.
- Consultar, modificar o cancelar reservas.
Módulo de precios
- Registrar los precios correspondientes.
Módulo de disponibilidad
- Consultar qué habitaciones están disponibles según las fechas seleccionadas.
- Evitar registrar una reserva cuando la habitación ya está ocupada.
ROLES
Podrá:
- Registrar huéspedes.
- Consultar disponibilidad.
- Realizar reservas.
- Consultar y modificar reservas.
- Consultar precios.
Personal de la Hostería
Podrá:
- Consultar las reservas.
- Consultar los datos de los huéspedes.
- Consultar las habitaciones y su disponibilidad.
- Gestionar la información relacionada con la estadía.
4.4 Organización de archivos
Si están trabajando directamente con HTML, CSS y JavaScript, una organización posible sería:
Proyecto-Hosteria/
│
├── index.html
│
├── pages/
│   ├── login.html
│   ├── reservas.html
│   ├── habitaciones.html
│   ├── huespedes.html
│   └── precios.html
│
├── css/
│   └── estilos.css
│
├── js/
│   ├── reservas.js
│   ├── habitaciones.js
│   ├── huespedes.js
│   └── precios.js
│
└── img/
    └── imágenes del sistema
