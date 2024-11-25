# TODO APP


## Aplicación web para crear listas de tareas

_TODO APP_ es una aplicación que permite a los usuarios crear, gestionar y eliminar sus listas de tareas pendientes. Esta aplicación está diseñada para personas que desean organizar y gestionar sus tareas diarias de manera eficiente.

## **Características**
- Organizar tareas en diferentes listas o categorías mediante:
  - Creación de bloques de tareas llamadas Listas
- Crear y eliminar tareas
- Marcar tareas como completadas

## Tecnologías utilizadas
- Entorno de ejecución y gestor de paquetes: **Bun** 🍞 (JavaScript)
- Backend: **NodeJS + ExpressJS**
- Frontend: **Vite + React**
- Base de Datos: **MongoDB**
- Estilos: **TailwindCSS**

## Instalación local
> [!IMPORTANT]
> Ya que la aplicación se ejecuta en contenedores de Docker, es necesario tenerlo [instalado](https://docs.docker.com/engine/install/).

Para instalar y ejecutar la aplicación localmente:
1. Clone el repositorio
2. Instala las dependencias con:
>```bash
>make install
>```
3. Levanta los contenedores de Docker con:
>```bash
>make docker-up
>```
4. Ve a tu navegador con `http://localhost` para empezar a usar la aplicación.
