# 🏆 Torneo Deportivo Internacional

## 👤 Estudiante

**Nombre completo:** [Valentina Delgado]

---

## 📖 Descripción del Proyecto

El torneo Deportivo Internacional lidera su planeación y ejecución, donde participan equipos y delegaciones de distintos países en múltiples disciplinas como atletismo, fútbol, ciclismo, judo, natación, esgrima, entre otras.

Este proyecto tiene como objetivo construir una **base de datos completa y flexible en MongoDB** que permita almacenar, gestionar y consultar información esencial del evento:

- Países y delegaciones participantes
- Equipos deportivos por disciplina
- Datos personales de los atletas
- Competencias programadas y sus resultados
- Estadísticas y logros históricos

---

### ❓ ¿Qué entidades son necesarias?

Las entidades fundamentales para el funcionamiento del sistema son:

- [Entidad 1] — (Atletas)
- [Entidad 2] — (Equipos)
- [Entidad 3] — (Delegaciones)

### 📚 ¿Cuántas colecciones se requieren y qué representan?

Se utilizarán las siguientes colecciones:

1. **[Atletas]** — Representa [informacion de los participantes de todas las delegaciones y equipos].
2. **[Equipos]** — Representa [informacion de los atletas que contienen y a que delegacion pertenecen].
3. **[Delegaciones]** — Representa [informacion sobre los equipos y sus medallas].


### 🧾 ¿Qué campos debería tener cada colección?

- **Atletas**
  - `id`: string
  - `nombre`: string
  - `edad`: number
  - `sexo`: string
  - `pais`: string
  - `equipo_id`: string

- **Equipos**
  - `id`: int
  - `nombre`: string
  - `disciplina`: string
  - `delegacion_id`: string
  - `integrantes`: array de subdocumentos (`atleta_id`, `nombre`, etc.)

  **Delegaciones**
  - `id`: number
  - `pais`: string
  - `continente`: string
  - `equipos`: array de subdocumentos (`disciplina`, `equipo_id`.)

### 🔢 ¿Qué tipos de datos se deben manejar?

- **Numéricos**: para edades, identificadores numéricos, y cantidad de medallas.
- **Fechas**: para registrar `fecha_competencia`.
- **Arrays**: para listas de integrantes, medallas ganadas, eventos.
- **Subdocumentos**: para almacenar estructuras anidadas como información de atletas dentro de equipos.

## 📌 Requisitos Técnicos

- **Base de datos**: MongoDB
---
## 👥 Contacto

- [valentina delgado](https//github.com/ValentinaDelgadoRincon)

---


## 📦 Estructura del Repositorio

```bash
📦torneo-deportivo-internacional/
├── archivos JSON              # datos de las colecciones
├── insert.js                  # Inserción de documentos en la colecciones
├── consultas_sencillas.js     # 5 consultas básicas sin operadores
├── consultas_operadores.js    # 10 consultas usando operadores MongoDB
└── README.md                  # Documentación principal del proyecto
