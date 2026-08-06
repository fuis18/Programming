---
layout: base.njk
eyebrow: Dev
title: Dev
subtitle: Backend, frontend, Rust y prácticas transversales
---

Desarrollo de software: cómo se construyen aplicaciones backend y frontend, qué frameworks y arquitecturas se eligen según el caso de uso, el ecosistema Rust para apps nativas y multiplataforma (incluyendo desarrollo de juegos), y las prácticas transversales — testing y autenticación — que aplican sin importar la capa que se esté construyendo.

## Library Universal

### dev-auth

Identidad y autenticación, transversal a backend y frontend: Keycloak como identity provider, los protocolos OIDC y OAuth2.0, tokens JWT, y Auth.js del lado frontend.

### dev-testing

Testing, transversal a todo el stack: pruebas unitarias (Vitest/Jest), pruebas de componentes e integración (Testing Library), end-to-end (Playwright), y automatización de navegador (Stagehand).

## Backend

### back-architecture

El orden de aprendizaje en backend: frameworks, patrón MVC, bases de datos y ORMs, NestJS, autenticación y testing — como mapa general antes de entrar al detalle.

### [back-stack]({{ '/dev/back-stack/' | url }})

Frameworks de backend y para qué sirve cada uno en la práctica: Actix-web para sistemas 24/7 de alta disponibilidad, Axum para microservicios, Fastify para APIs REST en JS/TS, Spring Boot para enterprise, FastAPI para servir modelos de IA, Django para CRUD con admin, y Hono para edge/serverless.

### back-technologies

Formas de comunicación entre servicios: APIs síncronas (REST, GraphQL, gRPC), mensajería asíncrona (RabbitMQ, Kafka, NATS, Redis Pub/Sub) y tiempo real (WebSocket, Server-Sent Events, Long Polling).

### back-databases

Bases de datos y cuándo usar cada una — SQLite, PostgreSQL, MongoDB, Cassandra, Redis, Neo4j, Qdrant — comparadas en ACID, JOINs, escalabilidad y disponibilidad, más los ORMs para trabajar con ellas (Prisma, TypeORM).

## Desktop

### desk-stack

Frameworks para construir aplicaciones de escritorio: Tauri para apps web empaquetadas, Ratatui para interfaces de terminal, GTK para apps grandes, Bevy para juegos, egui para utilidades rápidas.

## Frontend

### [front-stack]({{ '/dev/front-stack/' | url }})

Las piezas con las que se arma un frontend: meta-frameworks según el objetivo del proyecto (Astro para sitios estáticos, React Router v7 e interactividad, TanStack Start para apps con mucho manejo de datos, Svelte por rendimiento, Next.js para SEO/e-commerce, Angular para proyectos enterprise/legacy), routers (React Router, Wouter, TanStack Router) y librerías de componentes de UI (shadcn/ui, radix/ui, Mantine, HeadlessUI, HeroUI).

### front-style

### front-libs

Librerías de apoyo para construir la interfaz: animaciones (Framer Motion), estado global (Zustand), data fetching (Tanstack Query), tablas y listas virtuales (Tanstack Table/Virtual), formularios (RHF/TanStack Form), drag & drop (DnDKit), gráficos (Recharts), animación 3D (three.js/React Three Fiber), y utilidades puntuales como libpdf y travels.

### front-icons

Dónde sacar iconos y assets visuales: icones.js.org, iconify, tabler-icons, svgl, flaticon, dashboardicons, entre otros catálogos.
