# TODO APP


## Web Application for creating To-Do lists

_TODO APP_ is an application that allows users to create, manage and delete their to-do lists. This app is built for people who want to organize and manage their daily tasks efficiently.

## **Key Features**
- Organize tasks into different lists or categories by:
  - Create tasks blocks called Lists
- Create and delete tasks
- Mark tasks as completed

## Technology Stack
- Runtime and package manager: **Bun** 🍞 (JavaScript)
- Backend: **NodeJS + ExpressJS**
- Frontend: **Vite + React**
- DataBase: **MongoDB**
- Styles: **TailwindCSS**

## Installation
> [!IMPORTANT]
> Since this application is run in a Docker Container, it's necessary to have it [installed](https://docs.docker.com/engine/install/) in the system

Follow this steps to install and run the application locally:
1. Clone the repository
2. Install dependencies:
>```bash
>make install
>```
3. Create and build the docker images:
>```bash
>make docker-up
>```
4. Go to `http://localhost` to use the application
