---
layout: base.njk
eyebrow: Dev
title: Front Style
subtitle: Con qué se estiliza la interfaz
---

Mientras [front-libs]({{ '/dev/front-libs/' | url }}) cubre las librerías de JavaScript (estado, data fetching, tablas, formularios...), acá van las piezas del lado CSS: el framework de utilidades, sus plugins y el theming.

## Librerías de estilo

| Librería               | Uso                                                                             |
| ---------------------- | ------------------------------------------------------------------------------- |
| **Tailwind CSS**       | Framework utility-first: estilos directo en el markup, sin salir del componente |
| **Framer Motion**      | Animaciones declarativas para React, transiciones y gestos                      |
| **Tailwind Animation** | Utilidades de animación (keyframes, transiciones) sobre Tailwind                |
| **twekcn**             | Theming de colores personalizados para shadcn/ui                                |

## Component UI

| Lib             | Qué es                                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **shadcn/ui**   | No es una librería instalable: componentes copiables (Radix + Tailwind) que quedan en tu propio repo para editar libremente |
| **radix/ui**    | Primitivos accesibles sin estilos — la base sobre la que se construyen shadcn/ui y otras librerías                          |
| **Mantine.dev** | Librería de componentes completa y ya estilada, con muchos hooks utilitarios incluidos                                      |
| **HeadlessUI**  | Componentes sin estilos (headless) del equipo de Tailwind, pensados para combinar con Tailwind CSS                          |
| **HeroUI**      | Librería de componentes ya estilada (ex NextUI), pensada para prototipar rápido con buen look por defecto                   |

**Cómo elegir:** si querés control total del estilo y no te molesta tener el código de los componentes en tu repo → **shadcn/ui** (sobre **radix/ui** si necesitás construir primitivos propios). Si preferís algo ya estilado y completo de fábrica → **Mantine** o **HeroUI**. Si trabajás con Tailwind y solo necesitás la lógica de accesibilidad sin ningún estilo → **HeadlessUI**.

## Patrones de CSS moderno

Media queries de uso frecuente, sin depender de JS para detectarlas.

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
    color: #fff;
  }
}

@media (orientation: landscape) {
  body {
    display: flex;
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    display: flex;
    flex-direction: column;
  }
}

@media (display-mode: fullscreen) {
  .fullscreen {
    width: 100vw;
    height: 100vh;
  }
}
```

- `prefers-color-scheme` — dark mode a nivel sistema operativo, sin toggle manual.
- `orientation` — layout distinto según landscape/portrait (útil en mobile/tablet).
- `display-mode: fullscreen` — estilos específicos cuando la app corre como PWA en fullscreen.

## Ver también

- [front-stack]({{ '/dev/front-stack' | url }}) — meta-frameworks, routers y librerías de componentes.
- [front-libs]({{ '/dev/front-libs' | url }}) — librerías de JavaScript para construir la interfaz.
- [front-icons]({{ '/dev/front-icons' | url }}) — catálogos de iconos y assets visuales.
