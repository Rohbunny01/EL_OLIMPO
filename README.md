# Nombre del Proyecto

## Descripción

Breve descripción de tu proyecto

## Estructura

- `/frontend` - Aplicación Next.js
- `/backend` - API NestJS

## Requisitos

- Node.js >= 16
- npm o yarn
- PostgreSQL (para el backend)

## Instalación

### Frontend

1. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
   o si prefieres usar yarn:
   ```bash
   yarn install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   o con yarn:
   ```bash
   yarn dev
   ```

### Backend

1. Navega al directorio del backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
   o si prefieres usar yarn:
   ```bash
   yarn install
   ```
3. Configura la base de datos PostgreSQL y actualiza el archivo `.env` con las credenciales necesarias.
4. Ejecuta las migraciones de la base de datos (si es necesario):
   ```bash
   npm run migration:run
   ```
   o con yarn:
   ```bash
   yarn migration:run
   ```
5. Inicia el servidor:
   ```bash
   npm run start:dev
   ```
   o con yarn:
   ```bash
   yarn start:dev
   ```

## Notas

- Asegúrate de que el servidor de PostgreSQL esté corriendo antes de iniciar el backend.
- Revisa los archivos de configuración en cada directorio para más detalles sobre la configuración del entorno.
