# Hotel Reservas API

API de ejemplo para gestionar hoteles, clientes y reservas.

## Estructura

- `src/config/db.js`: conexión a MySQL
- `src/controllers`: lógica de negocio para hoteles, clientes y reservas
- `src/routes`: rutas de Express
- `src/models`: consultas a la base de datos
- `src/middlewares/error.middleware.js`: manejo de errores
- `src/app.js`: configuración de Express
- `src/server.js`: arranque del servidor
- `database/hotel_reservas.sql`: script de creación de la base de datos

## Configuración

1. Instalar dependencias:

```bash
npm install
```

2. Crear la base de datos en MySQL usando `database/hotel_reservas.sql`.
3. Ajustar las variables en `.env`.
4. Ejecutar el servidor:

```bash
npm run dev
```

## Endpoints

- `GET /api/hoteles`
- `GET /api/clientes`
- `GET /api/reservas`
- `POST /api/hoteles`
- `POST /api/clientes`
- `POST /api/reservas`
- `PUT /api/hoteles/:id`
- `PUT /api/clientes/:id`
- `PUT /api/reservas/:id`
- `DELETE /api/hoteles/:id`
- `DELETE /api/clientes/:id`
- `DELETE /api/reservas/:id`
