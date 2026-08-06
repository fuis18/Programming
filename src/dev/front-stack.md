---
layout: base.njk
eyebrow: Dev / Front-Architecture
title: Front Stack
subtitle: Las piezas con las que se arma un frontend
---

Una vez elegido el meta-framework ([front-architecture](/dev/front-architecture/)), quedan dos decisiones concretas: **con qué router navegás** y **de dónde salen los componentes de UI**. Esta nota cubre ambas.

## Router

| Router              | Tamaño / filosofía         | Ideal para                                                                 |
| -------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| **React Router**      | Estándar de facto           | Apps tradicionales (SPA), rutas declarativas, ecosistema React               |
| **Wouter**            | Minimalista (~2kb)          | Proyectos pequeños, cuando no necesitás abstracciones extra                  |
| **TanStack Router**   | TypeScript-first             | Apps grandes con control avanzado de datos y validación de params            |

### React Router
**El router más usado en React**

- Rutas declarativas, layouts anidados y loaders/actions desde la v6+ — cubre desde una SPA simple hasta un flujo con data-fetching por ruta.
- Mejor integración con el ecosistema React en general (librerías, tutoriales, Stack Overflow); es la opción por defecto si no hay una razón específica para otra.
- Elegilo cuando el proyecto es una app tradicional y el equipo ya conoce el ecosistema React.

### Wouter
**Minimalista, ~2kb**

- Sin abstracciones extra: la API es mínima y el bundle es prácticamente invisible en el tamaño final.
- No trae loaders, actions ni features avanzadas — es routing puro.
- Elegilo en proyectos pequeños o cuando el peso del bundle importa más que las features.

### TanStack Router
**TypeScript-first, fuertemente tipado**

- Tipado end-to-end en rutas y params: los errores de navegación se detectan en compile-time, no en runtime.
- Loaders y validación de parámetros integrados, con muy buena integración con TanStack Query — pensado para apps donde el ruteo está atado al estado de datos.
- Elegilo en apps grandes y complejas que ya usan (o van a usar) el resto del ecosistema TanStack.

## Component UI

| Lib             | Qué es                                                                 |
| ---------------- | ------------------------------------------------------------------------ |
| **shadcn/ui**     | No es una librería instalable: componentes copiables (Radix + Tailwind) que quedan en tu propio repo para editar libremente |
| **radix/ui**      | Primitivos accesibles sin estilos — la base sobre la que se construyen shadcn/ui y otras librerías |
| **Mantine.dev**   | Librería de componentes completa y ya estilada, con muchos hooks utilitarios incluidos |
| **HeadlessUI**    | Componentes sin estilos (headless) del equipo de Tailwind, pensados para combinar con Tailwind CSS |
| **HeroUI**        | Librería de componentes ya estilada (ex NextUI), pensada para prototipar rápido con buen look por defecto |

**Cómo elegir:** si querés control total del estilo y no te molesta tener el código de los componentes en tu repo → **shadcn/ui** (sobre **radix/ui** si necesitás construir primitivos propios). Si preferís algo ya estilado y completo de fábrica → **Mantine** o **HeroUI**. Si trabajás con Tailwind y solo necesitás la lógica de accesibilidad sin ningún estilo → **HeadlessUI**.

## Ver también
- [front-architecture](/dev/front-architecture/) — qué meta-framework elegir según el objetivo del proyecto.
- [front-libs](/dev/front-libs/) — librerías de apoyo (animaciones, estado, data fetching, forms, gráficos, 3D).
- [front-icons](/dev/front-icons/) — catálogos de iconos y assets visuales.
