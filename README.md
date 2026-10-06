# Sistema de Gestión de Reservas — Hostería ATEP

## 📌 Descripción del proyecto

El proyecto consiste en el desarrollo de un **sistema web para la gestión de reservas y huéspedes de la Hostería ATEP de Tafí del Valle**.

Actualmente, parte del proceso de reserva y registro de huéspedes se realiza de manera manual y mediante diferentes medios de comunicación, como WhatsApp, mensajes, llamadas y correo electrónico. Esto puede generar dificultades para centralizar la información de los clientes, las reservas, las habitaciones disponibles y los datos de los huéspedes.

La propuesta busca **digitalizar y centralizar el proceso**, permitiendo que el personal de la hostería gestione desde un único sistema la información relacionada con clientes, habitaciones, reservas y estadías.

El sistema contará con una base de datos centralizada donde se almacenará la información de los huéspedes, las reservas y el estado de las habitaciones. De esta manera, cuando un cliente llegue a la hostería, el personal podrá buscar sus datos y consultar su reserva desde el sistema.

Además, se contempla la posibilidad de que el cliente pueda registrarse previamente mediante un enlace, evitando la necesidad de utilizar documentación o registros manuales durante el proceso de reserva.

---

## 🎯 Objetivo general

Desarrollar un sistema web que permita **gestionar y centralizar las reservas, huéspedes, habitaciones y estadías de la Hostería ATEP de Tafí del Valle**, reemplazando parte de los procesos manuales actuales por una solución informática organizada y accesible para el personal autorizado.

---

## 🎯 Objetivos específicos

- Registrar y administrar los datos de los clientes y huéspedes.
- Gestionar las habitaciones y su disponibilidad.
- Registrar, modificar y consultar reservas.
- Asociar cada reserva con un cliente y una habitación.
- Permitir al personal consultar las reservas al momento de la llegada del huésped.
- Registrar huéspedes que no hayan realizado previamente su registro.
- Gestionar el ingreso y salida de los huéspedes.
- Registrar la información correspondiente a las fechas de entrada y salida.
- Contemplar la condición de afiliado de ATEP para determinar los beneficios o descuentos correspondientes.
- Centralizar la información en una única base de datos.
- Reducir el uso de registros manuales y la duplicación de información.
- Facilitar al personal de la hostería el control de habitaciones ocupadas y disponibles.
- Dejar preparada la estructura del sistema para futuras funcionalidades relacionadas con pagos y cancelaciones.

---

## 🏨 Alcance del sistema

El sistema estará destinado principalmente al **personal encargado de la Hostería ATEP de Tafí del Valle**.

Entre las principales funcionalidades se encuentran:

### 👤 Gestión de clientes

- Registro de clientes.
- Consulta de datos personales.
- Modificación de información.
- Identificación de clientes afiliados y no afiliados.

### 🛏️ Gestión de habitaciones

- Registro de habitaciones.
- Cantidad de camas por habitación.
- Estado de las habitaciones.
- Consulta de habitaciones disponibles y ocupadas.

### 📅 Gestión de reservas

- Creación de reservas.
- Consulta de reservas.
- Modificación de reservas.
- Cancelación de reservas.
- Asociación entre cliente, habitación y fechas de estadía.

### 🧾 Gestión de huéspedes

Cuando el huésped llega a la hostería, el personal podrá buscar su información y consultar la reserva correspondiente.

En caso de que la persona no se encuentre registrada previamente, el encargado podrá cargar sus datos directamente desde el sistema.

### 🚪 Ingreso y salida

El sistema permitirá registrar:

- Fecha de ingreso.
- Fecha prevista de salida.
- Estado de la estadía.
- Huéspedes alojados.

Esto permitirá conocer qué habitaciones están ocupadas y quiénes se encuentran alojados en cada una.

---

## 💳 Pagos y cancelaciones

Como parte del análisis del sistema se contempla la posibilidad de incorporar posteriormente un sistema de pagos mediante **Mercado Pago**.

Una de las alternativas planteadas consiste en utilizar un **30 % de la reserva como pago anticipado**, relacionado con la confirmación y las condiciones de cancelación.

Esta funcionalidad será analizada durante el desarrollo para determinar la alternativa más adecuada para el sistema.

---

## 👥 Afiliación ATEP

El sistema deberá contemplar si el cliente es afiliado a ATEP, ya que esta condición puede modificar el precio o permitir determinados beneficios.

Se prevé registrar la condición de afiliación y, cuando corresponda, solicitar un comprobante para verificarla.

El descuento o tarifa correspondiente deberá calcularse dentro del proceso de reserva según las reglas definidas para la hostería.

---

## 🗂️ Estructura general del sistema

El sistema estará organizado en diferentes módulos:

```text
Sistema de Gestión de Reservas
│
├── Usuarios
│   └── Inicio de sesión y permisos
│
├── Clientes
│   ├── Registrar
│   ├── Consultar
│   └── Modificar
│
├── Habitaciones
│   ├── Registrar
│   ├── Consultar disponibilidad
│   └── Estado
│
├── Reservas
│   ├── Crear reserva
│   ├── Consultar
│   ├── Modificar
│   └── Cancelar
│
├── Huéspedes
│   ├── Registro
│   ├── Check-in
│   └── Check-out
│
├── Pagos
│   └── Registro y consulta
│
└── Reportes
    ├── Reservas
    ├── Habitaciones
    └── Huéspedes
```

---



## 🔄 Funcionamiento general

El funcionamiento propuesto será:

```text
Cliente solicita una reserva
          ↓
Personal registra los datos
          ↓
Se consulta disponibilidad
          ↓
Se selecciona habitación
          ↓
Se registra la reserva
          ↓
Información almacenada en SQL Server
          ↓
Cliente llega a la hostería
          ↓
Personal busca sus datos
          ↓
Se consulta la reserva
          ↓
Check-in
          ↓
Estadía
          ↓
Check-out
```

El sistema permitirá que toda la información quede registrada en un único lugar, facilitando el acceso y control de los datos por parte del personal de la hostería.

---

## 👥 Equipo de trabajo

El proyecto será desarrollado por un equipo de **3 integrantes**.

El trabajo se organizará mediante **GitHub**, utilizando repositorios y ramas para facilitar el desarrollo colaborativo y el control de versiones.

---

## 🚀 Futuras mejoras

Como posibles ampliaciones del sistema se consideran:

- Registro y reserva directamente por parte del cliente.
- Integración con Mercado Pago.
- Sistema de notificaciones.
- Generación de comprobantes.
- Registro automatizado de información requerida por organismos correspondientes.
- Reportes estadísticos.
- Administración de múltiples establecimientos.

---

## 📌 Estado del proyecto

**Proyecto Final Integrador — Tecnicatura Universitaria en Programación — UTN**

Estado actual: **En desarrollo**.
