---
layout: base.njk
eyebrow: Dev
title: Back Architecture
subtitle: El orden de aprendizaje en backend
---

## Roadmap

1. Frameworks
2. Patrón MVC
3. Bases de datos + ORMs
4. NestJS
5. Auth (JWT, OAuth)
6. Testing

### 0. Conceptops

Contruir un backned desde 0

### 1. Frameworks

Punto de partida: elegir el framework según el caso de uso (alta disponibilidad, microservicios, enterprise, ML, CRUD, edge) antes que por preferencia personal. Ver [back-stack](/dev/back-stack/).

### 2. Patrón MVC

Model-View-Controller: separa la app en tres capas — **Model** (datos y lógica de negocio), **View** (lo que se le devuelve al cliente, normalmente JSON en una API) y **Controller** (recibe la request, coordina Model y View). Es la base conceptual sobre la que se apoyan la mayoría de los frameworks backend (incluido NestJS) antes de pasar a arquitecturas más específicas.

### 3. Bases de datos + ORMs

Con el framework y el patrón resueltos, la siguiente decisión es dónde y cómo persistir datos. Ver [back-databases](/dev/back-databases/).

### 4. NestJS

Framework de Node.js sobre Express o Fastify, con arquitectura modular inspirada en Angular: decorators, inyección de dependencias y una estructura opinionada (controllers, providers, modules) que ordena el patrón MVC a escala. Tiene sentido aprenderlo después de MVC y de manejar al menos un ORM, porque es donde ambas piezas se juntan en la práctica.

### 5. Auth (JWT, OAuth)

Identidad y autenticación una vez que ya hay API y datos que proteger. Ver [dev-auth](/dev/dev-auth/).

### 6. Testing

Último escalón: cubrir con tests lo que ya se construyó. Ver [dev-testing](/dev/dev-testing/).

## Ver también

- [back-stack](/dev/back-stack/) — frameworks de backend y para qué sirve cada uno.
- [back-technologies](/dev/back-technologies/) — comunicación entre servicios (síncrona, asíncrona, real time).
- [back-databases](/dev/back-databases/) — bases de datos y ORMs.
- [dev-auth](/dev/dev-auth/) — identidad y autenticación.
- [dev-testing](/dev/dev-testing/) — testing transversal a todo el stack.
