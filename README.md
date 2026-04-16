# Hotel Reservas API

API de ejemplo para gestionar hoteles, clientes y reservas.

Implementa operaciones CRUD basicas requeridas por el laboratorio para:

- Hoteles
- Clientes
- Reservas

Operaciones incluidas: `GET`, `POST`, `PUT`.

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

Este proyecto funciona en macOS y Windows. Las diferencias estan en los comandos para levantar MySQL y cargar el script.

1. Instalar dependencias:

```bash
npm install
```

2. Levantar MySQL local:

macOS (Homebrew):

```bash
brew services start mysql
```

Windows (servicio de MySQL):

```powershell
net start MySQL80
```

3. Configurar usuario `root` con contraseña `rootroot` (si aun no esta configurado):

```bash
mysql -u root -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'rootroot'; FLUSH PRIVILEGES;"
```

4. Crear archivo `.env` en la raiz del proyecto con:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=rootroot
DB_NAME=hotel_reservas
PORT=3000
```

5. Ejecutar script de base de datos:

macOS / Linux:

```bash
mysql -u root -prootroot < database/hotel_reservas.sql
```

Windows (PowerShell):

```powershell
Get-Content .\database\hotel_reservas.sql | mysql -u root -prootroot
```

6. Ejecutar el servidor:

```bash
npm start
```

Opcional para desarrollo:

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

## Códigos Esperados

- `200 OK`: GET y PUT exitosos
- `201 Created`: POST exitoso
- `400 Bad Request`: body invalido o faltan campos obligatorios
- `404 Not Found`: recurso no encontrado en GET por id o PUT
- `500 Internal Server Error`: error inesperado del servidor

## Validación Manual (Postman)

Base URL:

```text
http://localhost:3000
```

Requests minimos sugeridos:

1. `GET /api/hoteles`
2. `GET /api/clientes`
3. `GET /api/reservas`
4. `POST /api/hoteles` con body valido
5. `POST /api/clientes` con body valido
6. `POST /api/reservas` con body valido (usar ids existentes de hotel y cliente)
7. `PUT /api/hoteles/:id` existente
8. `PUT /api/clientes/:id` existente
9. `PUT /api/reservas/:id` existente
10. Requests invalidos para confirmar `400` (faltando campos obligatorios)
11. `PUT` a id inexistente para confirmar `404`

## Colección Postman (Importable)

Se incluye una colección lista para importar:

- `postman/api_reservas_swseguro.postman_collection.json`

Incluye:

- Carpeta de Hoteles, Clientes y Reservas
- Requests para validar `200`, `201`, `400` y `404`
- Variables de colección (`baseUrl`, `hotelId`, `clienteId`, `reservaId`)

Para macOS y Windows, solo ajusta `baseUrl` si usas otro puerto o host distinto de `http://localhost:3000`.

