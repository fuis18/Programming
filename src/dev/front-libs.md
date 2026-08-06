---
layout: base.njk
eyebrow: Dev
title: Front Libs
subtitle: Librerías de apoyo para construir la interfaz
---

Una vez resuelto el meta-framework, el router y la librería de componentes ([front-stack]({{ '/dev/front-stack/' | url }})), estas son las librerías puntuales que resuelven un problema específico de la interfaz: animar, guardar estado, traer datos, armar tablas, formularios, drag & drop y gráficos.

## Librerías de apoyo

| Categoría        | Librería                | Uso                                                               |
| ---------------- | ----------------------- | ----------------------------------------------------------------- |
| Animaciones      | **Framer Motion**       | Animaciones declarativas para React, transiciones y gestos        |
| Animaciones      | Tailwind Animations     |                                                                   |
| Estado global    | **Zustand**             | Estado global simple, sin el boilerplate de Context/useReducer    |
| Data fetching    | **Tanstack Query**      | Cache, invalidación, refetch y estado async de datos del servidor |
| Tablas           | **Tanstack Table**      | Tablas headless: ordenamiento, filtrado y paginación              |
| Listas virtuales | **Tanstack Virtual**    | Renderizado eficiente de listas y grillas muy largas              |
| Formularios      | **RHF / TanStack Form** | Manejo de formularios, validación y estado de campos              |
| Drag & drop      | **DnDKit**              | Interacciones de drag & drop accesibles                           |
| Gráficos         | **Recharts**            | Visualización de datos y gráficos                                 |

### Cuándo usar Context vs. Zustand

- **Context** para datos globales que casi nunca cambian (configuración de la interfaz, i18n).
- **Zustand** para estado dinámico, cuando se quiere evitar la lógica de `useReducer` o simplemente una experiencia de desarrollo más limpia.
- No hace falta elegir uno solo: es común usar Context para el tema de la app y Zustand para la lógica de negocio pesada.

## Animación 3D

| Tecnología            | Qué es                   | Para qué sirve                                     |
| --------------------- | ------------------------ | -------------------------------------------------- |
| **Canvas**            | Elemento HTML            | Lienzo donde se dibujan gráficos                   |
| **WebGL**             | API del navegador        | Dibujar gráficos 2D/3D de alto rendimiento         |
| **three.js**          | Librería JS              | Facilita trabajar con WebGL y 3D                   |
| **React Three Fiber** | Framework sobre three.js | Usar three.js dentro de React de forma declarativa |

## Utilidades puntuales

| Librería    | Uso                                           |
| ----------- | --------------------------------------------- |
| **libpdf**  | CRUD de PDF                                   |
| **travels** | Funcionalidad de hacer & deshacer (undo/redo) |

## Ver también

- [front-stack]({{ '/dev/front-stack/' | url }}) — meta-frameworks, routers y librerías de componentes.
- [front-architecture]({{ '/dev/front-architecture/' | url }}) — cómo organizar el proyecto por dominio.
- [front-icons]({{ '/dev/front-icons/' | url }}) — catálogos de iconos y assets visuales.
