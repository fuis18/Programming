---
layout: base.njk
eyebrow: Dev / Back-Architecture
title: Back Stack
subtitle: Un framework por caso de uso, no uno para todo
---

No existe "el mejor" framework de backend — existe el que mejor encaja con el problema que estás resolviendo. Esta nota resume, por framework, para qué lo elegirías en la práctica.

## Resumen

| Framework       | Lenguaje / Runtime | Uso principal                     | Ejemplos                                           |
| --------------- | ------------------ | ---------------------------------- | --------------------------------------------------- |
| **Actix-web**   | Rust                | Sistemas 24/7 de alta disponibilidad | Procesadores de pagos, game servers, trading        |
| **Axum**        | Rust                | Microservicios internos            | Auth service, API gateway, job queue workers        |
| **Fastify**     | Node.js             | APIs REST en equipos JS/TS         | BFF, APIs públicas, servicios con mucho CRUD         |
| **Spring Boot** | Java (JVM)          | Backend enterprise / corporativo   | Banca, ERPs, sistemas de salud, Fortune 500          |
| **FastAPI**     | Python              | Servir modelos ML/IA               | Inference endpoints, pipelines de datos, LLM APIs    |
| **Django**      | Python              | Web apps con mucho CRUD y admin    | CMSs, portales internos, dashboards operativos       |
| **Hono**        | Edge / multi-runtime | Serverless / edge                 | Middleware CDN, auth en el borde, APIs en Workers    |

## Benchmarks (aprox.)

Números orientativos de throughput (requests/segundo) y curva de aprendizaje — sirven para comparar en relativo, no como cifra absoluta: dependen del hardware, el payload y el tipo de test.

| Framework       | RPS aprox.              | Curva de aprendizaje |
| --------------- | ------------------------ | --------------------- |
| **Actix-web**   | ~300k                     | Difícil                |
| **Axum**        | ~280k                     | Difícil                |
| **Fastify**     | ~80k                      | Fácil                  |
| **Spring Boot** | ~50k                      | Difícil                |
| **FastAPI**     | ~30k                      | Fácil                  |
| **Django**      | ~15k                      | Medio                  |
| **Hono**        | varía según runtime (edge) | Fácil                |

Orden por rendimiento crudo: Actix-web > Axum > Fastify > Spring Boot > FastAPI > Django. Hono no compite en esta tabla porque su valor no es el pico de rps sino correr igual en cualquier runtime (Workers, Deno, Bun, Node, Vercel Edge).

## Actix-web
**Rust · sistemas 24/7 de alta disponibilidad**

- Actor model interno, sin garbage collector: rendimiento predecible bajo carga sostenida.
- El costo de entrada (borrow checker, tipado estricto) se paga al elegirlo para servicios donde el downtime o la latencia son inaceptables.
- Casos típicos: procesadores de pagos, servidores de juegos en tiempo real, sistemas de trading.

## Axum
**Rust · microservicios internos**

- Construido sobre Tokio y Tower; se integra de forma nativa con el resto del ecosistema async de Rust (middleware, tracing, timeouts como capas reutilizables).
- Más ligero y modular que Actix-web — encaja mejor cuando el servicio es pequeño y compone con otros (gateway, workers, colas de jobs) en vez de ser un monolito.
- Casos típicos: auth service, API gateway, workers de una cola de trabajos.

## Fastify
**Node.js · APIs REST en equipos JS/TS**

- Schema-first: las rutas declaran JSON Schema y Fastify genera validación y serialización automática (fast-json-stringify + ajv), 2-3× más rápido que Express en el mismo hardware.
- Sistema de plugins con inyección de dependencias — buen equilibrio entre productividad de equipo JS/TS y rendimiento.
- Casos típicos: BFF, APIs públicas, servicios con mucho CRUD.

## Spring Boot
**Java (JVM) · enterprise / corporativo**

- DI vía IoC container y autoconfiguración; el ecosistema Spring (Security, Data, Cloud) es el más maduro para requisitos corporativos (auditoría, compliance, integración con sistemas legacy).
- La JVM con JIT sostiene alto rendimiento en cargas largas, y GraalVM Native Image resuelve el arranque lento cuando hace falta.
- Casos típicos: banca, ERPs, sistemas de salud, empresas Fortune 500.

## FastAPI
**Python · servir modelos ML/IA**

- Type hints de Python se traducen directo en validación (Pydantic v2) y documentación OpenAPI/Swagger automática.
- Async nativo sobre ASGI — es el estándar de facto para exponer modelos como endpoints de inferencia.
- Casos típicos: inference endpoints, pipelines de datos, APIs para LLMs.

## Django
**Python · CRUD con admin**

- "Batteries included": ORM, panel admin autogenerado, migraciones, auth y formularios de fábrica. Opinionado por diseño — poca fricción para llegar rápido a un CRUD completo.
- Django REST Framework cubre el caso de exponerlo como API.
- Casos típicos: CMSs, portales internos, dashboards operativos, MVPs con mucho CRUD.

## Hono
**Edge / multi-runtime · serverless**

- Ultra-ligero (~14 kB), construido sobre Web Standards API (Fetch nativo) en vez de APIs específicas de un runtime.
- Corre sin cambios en Cloudflare Workers, Deno, Bun, Node y Vercel Edge — es, en la práctica, el único framework verdaderamente multi-runtime de la lista.
- Casos típicos: middleware en CDN, auth en el borde, APIs desplegadas en Workers.

## Ver también
- [back-technologies](/dev/back-technologies/) — cómo se comunican estos servicios entre sí (REST/GraphQL/gRPC, mensajería, tiempo real).
- [back-databases](/dev/back-databases/) — qué base de datos combinar con cada uno de estos stacks.
