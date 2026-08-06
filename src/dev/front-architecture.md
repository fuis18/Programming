---
layout: base.njk
eyebrow: Dev
title: Front Architecture
subtitle: Un meta-framework por objetivo, no por preferencia
---

El meta-framework se elige por el objetivo del proyecto (¿estático?, ¿SEO?, ¿mucho manejo de datos?, ¿enterprise?), no por gusto personal — es la decisión que condiciona todo lo que viene después ([front-stack](/dev/front-stack/), [front-libs](/dev/front-libs/)).

## Resumen

| Framework           | Bundler        | Objetivo              | Destaca en          |
| --------------------- | -------------- | ----------------------- | ---------------------- |
| **Astro**              | Vite            | Sitios estáticos         | Blogs — 95 en Lighthouse |
| **React Router v7**    | Vite            | Interactividad            | Ecosistema React        |
| **TanStack Start**     | Vite            | Apps con mucho manejo de datos | Proyectos grandes      |
| **Svelte**             | Vite            | Interactividad            | Rendimiento             |
| **Next.js**            | Turbopack       | Público / SEO             | E-commerce               |
| **Angular**            | Vite / esbuild  | Enterprise                | Proyectos legacy         |

## Astro
**Sitios estáticos**

- Arquitectura de "islas": HTML estático por defecto, JS solo donde hay interactividad real — el resultado son sitios que cargan casi instantáneo.
- Agnóstico de UI: podés mezclar componentes de React, Vue, Svelte o Solid dentro del mismo proyecto.
- Elegilo cuando el contenido manda sobre la interactividad: blogs, landing pages, documentación, marketing sites.

## React Router v7
**Interactividad**

- Sucesor de Remix; suma data loading, rutas anidadas y renderizado híbrido (SPA/SSR) al router más usado del ecosistema React.
- Máxima compatibilidad con librerías y patrones ya conocidos por cualquier equipo React.
- Elegilo cuando la app es principalmente interactiva y el equipo ya vive en el ecosistema React.

## TanStack Start
**Apps con mucho manejo de datos**

- Full-stack sobre TanStack Router: SSR, server functions y streaming, con el mismo tipado end-to-end que el resto de TanStack.
- Pensado desde el data-fetching hacia afuera — encaja natural con TanStack Query para cache, invalidación y estado async.
- Elegilo en proyectos grandes donde el estado del servidor (no la UI) es el problema principal a resolver.

## Svelte
**Interactividad, por rendimiento**

- Compila en build time en vez de shippear un runtime pesado al cliente — bundles más chicos y menos trabajo en el navegador que un framework basado en Virtual DOM.
- Sintaxis más cercana a HTML/CSS/JS plano, con menos boilerplate que React para el mismo resultado.
- Elegilo cuando el rendimiento en dispositivos de gama baja o la simplicidad del código son prioridad.

## Next.js
**Público / SEO**

- SSR y SSG de fábrica, App Router con Server Components, y el ecosistema más grande en despliegue (Vercel) y documentación disponible.
- Turbopack acelera dev server y builds frente a Webpack en proyectos grandes.
- Elegilo cuando el SEO y el time-to-first-byte le importan al negocio: e-commerce, marketing, contenido público indexable.

## Angular
**Enterprise**

- Framework completo (no solo librería de UI): DI, routing, forms y HTTP client incluidos, con TypeScript como ciudadano de primera clase desde el día uno.
- Convenciones estrictas y estructura opinionada — predecible en equipos grandes, aunque con más curva de entrada.
- Elegilo en proyectos enterprise o legacy donde ya existe (o se busca) esa consistencia a largo plazo entre equipos.

## Ver también
- [front-stack](/dev/front-stack/) — routers y librerías de componentes UI para completar el frontend.
- [front-libs](/dev/front-libs/) — librerías de apoyo (animaciones, estado, data fetching, forms, gráficos, 3D).
