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
Principios y buenas prácticas aplicados al sistema

Estos criterios guían decisiones concretas de diseño y programación. Se aplican de forma proporcional al tamaño de la primera versión: panel de habitaciones para el encargado, cuatro estados, datos persistentes y sin reservas ni información personal.

### DRY en las reglas de habitaciones

- Definir los cuatro estados válidos en un único lugar del sistema: `libre`, `ocupada`, `en_limpieza` y `clausurada`.
- Mantener centralizada la relación entre estado, etiqueta visible y color. La interfaz no debe volver a definir esos valores en cada pantalla o componente.
- Validar los cambios con la misma regla compartida por las operaciones que actualicen una habitación. No aceptar estados distintos de los cuatro acordados.
- Evitar duplicar la lógica de persistencia o las reglas de identificadores en formularios, vistas y reportes.
- Si una regla cambia, actualizar su fuente única y sus pruebas. DRY no justifica crear una abstracción para dos fragmentos que solo se parecen por casualidad.

**Ejemplo aplicado:** si `en_limpieza` se muestra como “En limpieza” y amarillo, ese mapeo se define una vez y el panel lo reutiliza en todas las habitaciones.

### YAGNI para cuidar el alcance

Implementar primero lo que el encargado necesita en esta etapa:

1. Cargar y consultar habitaciones existentes.
2. Ver el número y el estado de cada habitación.
3. Cambiar el estado entre las cuatro opciones y guardar el cambio.
4. Consultar las camas y plazas como datos descriptivos, si se decide mostrarlas.

No agregar reservas por fecha, perfiles de huéspedes, datos personales, pagos, cancelaciones, notificaciones, portal externo ni reportes avanzados. No preparar módulos vacíos “por si acaso”. Una ampliación se agrega cuando exista una necesidad validada y se acuerde un nuevo alcance.

### SOLID en una aplicación pequeña

SOLID orienta la separación del código, pero no exige crear muchas capas ni clases. Para esta primera versión se propone:

- **Responsabilidad única:** mantener separadas la presentación del panel, las reglas para cambiar un estado y las operaciones para guardar o consultar habitaciones. La pantalla no debería conectarse directamente a la base de datos ni decidir por su cuenta qué estados son válidos.
- **Abierto a extensión y cerrado a modificación:** centralizar el catálogo de estados y su presentación para que un cambio aprobado pueda incorporarse sin corregir manualmente múltiples pantallas. No permitir que el sistema acepte estados nuevos sin validación del equipo.
- **Sustitución de Liskov:** si se implementa más de una forma de guardar habitaciones, todas deben cumplir el mismo contrato: recuperar habitaciones, conservar el identificador y persistir estados válidos. Si existe una sola forma de almacenamiento, no hace falta crear jerarquías de clases.
- **Segregación de interfaces:** definir contratos pequeños con operaciones de habitaciones, por ejemplo consultar el inventario y actualizar el estado. No incluir métodos de reservas, pagos o huéspedes, que están fuera del alcance.
- **Inversión de dependencias:** si la separación resulta útil, hacer que las reglas del sistema dependan de un contrato de almacenamiento y no de un motor de base de datos concreto. Para un prototipo muy pequeño, evitar esa capa si solo agrega complejidad sin facilitar cambios reales.

### Código limpio en las tareas cotidianas

- Usar nombres claros y consistentes. Para los valores internos, mantener una convención única como `en_limpieza`; para el usuario, mostrar etiquetas legibles como “En limpieza”.
- Mantener cada función enfocada. Por ejemplo, consultar habitaciones, validar un cambio y guardar el estado son tareas que pueden separarse si el código empieza a mezclarlas.
- Evitar valores mágicos. Los horarios de salida y fin de limpieza deben tener nombres y estar definidos en un lugar claro. La regla informada es salida a las 10:00 y limpieza hasta después de las 10:30; está pendiente decidir si el cambio a libre será automático o manual.
- Hacer explícitos los datos obligatorios y opcionales: el número de habitación y el estado son obligatorios; camas y plazas son descriptivos y no deben bloquear una actualización de estado.
- No borrar físicamente una habitación. Para retirarla del uso, conservar el registro y marcarla como `clausurada`.
- Informar al encargado cuando un cambio no se pudo validar o guardar. No mostrar un cambio como exitoso si no quedó persistido.
- Acompañar los colores con texto. El significado del estado no debe depender solo de distinguir el color.
- Comentar decisiones de negocio que no sean evidentes, no repetir en comentarios lo que ya expresa el código.
- No registrar datos personales de huéspedes ni información que el sistema no necesita.

### Revisión, pruebas y mantenimiento

Antes de integrar un cambio, revisar que:

- El número de habitación siga siendo único y no se pueda borrar el registro.
- Solo se acepten los cuatro estados válidos y cada uno aparezca con su etiqueta y color acordados.
- Camas y plazas puedan faltar sin impedir la consulta ni el cambio de estado.
- Un estado corregido se guarde y siga visible después de cerrar y volver a abrir el sistema.
- El cambio de estado respete la regla de limpieza y el criterio manual o automático que confirme la hostería.
- El cambio no incorpore reservas, pagos, datos personales ni accesos externos sin una modificación aprobada del alcance.

Se recomienda revisar estos casos entre los integrantes y automatizar las pruebas repetitivas cuando las herramientas de la materia lo permitan. Los cambios deberían ser pequeños, tener nombres descriptivos y pasar por una revisión de otro integrante antes de integrarse a la rama principal.

## Estrategia metodológica

El equipo propone combinar organización visual de tareas con ciclos cortos de trabajo. Kanban puede mostrar qué está pendiente, en curso y terminado; las iteraciones breves permiten revisar avances y ajustar prioridades. Como son tres integrantes, se acordarán responsables y se revisará el trabajo en conjunto.

Git y GitHub se utilizarán para compartir cambios y mantener el historial del proyecto. Las revisiones entre integrantes ayudarán a detectar errores y mantener criterios comunes. Las pruebas automáticas y la integración continua se consideran prácticas posibles durante la programación, si las herramientas y el tiempo de la materia lo permiten; no se presentan como funciones ya implementadas.

## Tareas iniciales

1. Confirmar el inventario existente de habitaciones, números, camas y plazas.
2. Acordar cómo se cambiarán los estados y si el estado “Libre” se actualizará automáticamente después de las 10:30.
3. Definir cómo se marcará y rehabilitará una habitación clausurada.
4. Diseñar el panel con las cuatro etiquetas y colores.
5. Implementar el guardado persistente y verificar que un estado corregido se conserve.
6. Revisar el funcionamiento entre los tres integrantes antes de presentar el avance.

## Pendientes de validación

- ¿El paso de “En limpieza” a “Libre” será automático o manual?
- ¿Qué procedimiento se seguirá para clausurar y rehabilitar una habitación?
- ¿Cómo se respaldarán los datos para recuperarlos ante una falla?
- ¿Qué tecnología de almacenamiento se utilizará, según las herramientas disponibles en la materia?

## Equipo

El proyecto será realizado por tres integrantes. Los nombres se completarán en la entrega del grupo.
