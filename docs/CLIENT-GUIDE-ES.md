# The Merc — Guía para el Cliente

**Tu sitio web:** themercsd.com
**Tu panel de administración:** the-merc.sanity.studio
**Contacto de soporte:** eduskhd@gmail.com

---

## ¿Qué es este documento?

Esta es tu guía completa para entender y gestionar el sitio web de The Merc. Cubre:

- Qué contiene cada página del sitio
- Cómo acceder a tu panel de administración
- Cómo añadir, editar y eliminar eventos
- Cómo gestionar tu menú
- Cómo subir y gestionar fotos de la galería
- Qué se actualiza automáticamente
- Qué requiere al desarrollador

No se necesita conocimiento técnico.

---

## Tu sitio web de un vistazo

El sitio de The Merc tiene **6 páginas públicas:**

| Página | URL | Qué contiene |
|---|---|---|
| **Inicio** | themercsd.com | Foto hero, horarios, eventos, categorías del menú, redes sociales |
| **Menú** | themercsd.com/menu | Menú completo con tabs: Pizza, Burgers, Good Eats, Coffee, Drinks |
| **Eventos** | themercsd.com/events | Próximos eventos y calendario de música en vivo |
| **Galería** | themercsd.com/gallery | Grid de fotos del local |
| **Acerca de** | themercsd.com/about | Historia de The Merc, pilares, sección Flandreau |
| **Visítanos** | themercsd.com/visit | Horarios, dirección, teléfono, cómo llegar |

### Qué se actualiza solo (sin hacer nada)

| Función | Cómo funciona |
|---|---|
| **Badge Abierto / Cerrado** | Se calcula en tiempo real según tus horarios |
| **Horario del día de hoy** | El día actual aparece destacado en la página Visítanos |
| **Eventos pasados** | Los eventos con fecha pasada desaparecen solos |
| **Banner de esta noche** | Si hay un evento hoy, aparece un banner en la página de inicio |

---

## Tu panel de administración — Sanity Studio

Tu panel de administración es un sitio web privado donde puedes editar el contenido sin tocar código.

**URL:** `https://the-merc.sanity.studio`
**Login:** Tu cuenta de Sanity (email + contraseña)

### Cómo se ve el panel de administración

```
┌─────────────────────────────────────────────────────┐
│  The Merc — Admin                      [Publicar]   │
├──────────────────┬──────────────────────────────────┤
│                  │                                  │
│   📅  Eventos    │   ← Haz clic en una sección      │
│                  │       para gestionarla           │
│   🍕  Menú       │                                  │
│                  │                                  │
│   🖼️  Galería    │                                  │
│                  │                                  │
└──────────────────┴──────────────────────────────────┘
```

### Las tres secciones que puedes gestionar

| Sección | Qué puedes hacer | Cuánto tarda en aparecer en el sitio |
|---|---|---|
| **📅 Eventos** | Añadir, editar, eliminar eventos y música en vivo | ~1 minuto |
| **🍕 Menú** | Añadir, editar, ocultar, eliminar items del menú | ~1 minuto |
| **🖼️ Galería** | Subir, reordenar, eliminar fotos | ~1 hora |

---

## Sección 1 — Gestionar Eventos

### Cómo añadir un nuevo evento

**Paso 1.** Ve a `the-merc.sanity.studio` e inicia sesión.

**Paso 2.** Haz clic en **📅 Eventos** en el menú de la izquierda.

**Paso 3.** Haz clic en el botón **+ Nuevo** (arriba a la derecha, o el ícono de lápiz ✏️).

**Paso 4.** Rellena los campos:

```
Artist / Event Name  →  [Steel Wheels Band                  ]
Event Type           →  ● Live Music  ○ Trivia  ○ Special  ○ Community
Date                 →  [15 oct. 2026                       ]
Start Time           →  [20:00   ]   ← Formato 24h (20:00 = 8 PM)
End Time             →  [23:00   ]   ← Opcional
Description          →  [Banda de country rock de Nashville. Entrada gratuita.]
Event Photo          →  [ Arrastra una foto aquí o haz clic para subir ]
Ticket URL           →  [                                   ]   ← Dejar vacío si es gratis
Featured Event       →  □  ← Marcar para destacar en la página de inicio
```

**Paso 5.** Haz clic en el botón verde **Publish** (arriba a la derecha).

**¡Listo!** El evento aparece en la página de Eventos en menos de 60 segundos.

---

### Guía de formato de hora

El panel usa **formato 24 horas:**

| Hora normal | Escribir como |
|---|---|
| 7:00 AM | `07:00` |
| 12:00 PM (mediodía) | `12:00` |
| 5:00 PM | `17:00` |
| 7:00 PM | `19:00` |
| 8:00 PM | `20:00` |
| 9:00 PM | `21:00` |
| 10:00 PM | `22:00` |
| 11:00 PM | `23:00` |

---

### Cómo editar un evento existente

**Paso 1.** Haz clic en **📅 Eventos** en el menú lateral.

**Paso 2.** Haz clic en el evento que quieres editar de la lista.

**Paso 3.** Haz los cambios en los campos.

**Paso 4.** Haz clic en **Publish**.

Los cambios aparecen en el sitio en menos de 60 segundos.

---

### Cómo eliminar un evento

**Paso 1.** Haz clic en **📅 Eventos** → abre el evento.

**Paso 2.** Haz clic en el **menú de tres puntos** (⋯) arriba a la derecha.

**Paso 3.** Selecciona **Delete** (Eliminar).

**Paso 4.** Confirma la eliminación.

> **Consejo:** No necesitas eliminar eventos pasados — desaparecen del sitio solos cuando pasa su fecha. Solo elimina si cometiste un error o si cancelaste el evento.

---

### Consejos para fotos de eventos

- Tamaño recomendado: al menos **800×600 píxeles**
- Formatos: JPG, PNG o WebP
- Usa fotos de prensa del artista, flyers del evento, o tus propias fotos de eventos anteriores
- Si no tienes foto, deja el campo vacío — el sitio usa una foto del local automáticamente

---

### Cómo marcar un evento como "Destacado"

Marca la casilla **Featured Event** al crear o editar un evento. Los eventos destacados aparecen con una etiqueta dorada "Featured" y pueden verse más prominentes en la página de inicio.

---

## Sección 2 — Gestionar el Menú

### Cómo añadir un nuevo item al menú

**Paso 1.** Haz clic en **🍕 Menu Items** en el menú lateral.

**Paso 2.** Haz clic en **+ New**.

**Paso 3.** Rellena los campos:

```
Name              →  [Cowboy Layer Cake Burger               ]
Menu Section      →  ○ Pizza  ● Burgers  ○ Good Eats  ○ Coffee  ○ Drinks
Description       →  [Doble smash patty, huevo frito, bacon, cheddar.]
Price             →  [$16.00  ]
Tags              →  □ Gluten Free  □ Vegetarian  □ Vegan  ■ Popular  □ Spicy  □ New
Photo             →  [ Arrastra una foto aquí ]
Note              →  [Consulta disponibilidad diaria]   ← Opcional
Available on Menu →  ■  ← Mantener marcado para mostrarlo en el sitio
```

**Paso 4.** Haz clic en **Publish**.

---

### Cómo ocultar temporalmente un item del menú

Si un plato no está disponible temporalmente (fuera de temporada, falta de ingredientes, etc.):

**Paso 1.** Abre el item del menú.

**Paso 2.** **Desmarca** la casilla **Available on Menu**.

**Paso 3.** Haz clic en **Publish**.

El item desaparece del sitio web pero sigue guardado en el panel. Vuelve a marcar la casilla para recuperarlo.

> Esto es mejor que eliminar — conservas toda la información y puedes restaurarlo al instante.

---

### Cómo actualizar un precio

**Paso 1.** Abre el item del menú.

**Paso 2.** Haz clic en el campo **Price** y cambia el número.

**Paso 3.** Haz clic en **Publish**.

Ejemplos de formato de precio:
- `$12` — precio único
- `$10 / $14` — pequeño / grande
- `$3 each` — por unidad
- Dejar en blanco si el precio cambia cada día

---

### Secciones del menú explicadas

| Sección | Aparece en el tab |
|---|---|
| Pizza | 🍕 Pizza |
| Burgers | 🍔 Burgers |
| Good Eats | 🍟 Good Eats |
| Coffee | ☕ Coffee |
| Drinks | 🍺 Drinks |

Cada item va en exactamente una sección. Si añades una cerveza nueva, elige **Drinks**. Si añades un sándwich, elige **Good Eats**.

---

## Sección 3 — Gestionar Fotos de la Galería

### Cómo subir una foto nueva

**Paso 1.** Haz clic en **🖼️ Gallery** en el menú lateral.

**Paso 2.** Haz clic en **+ New** para añadir una foto.

**Paso 3.** Rellena los campos:

```
Photo             →  [ Arrastra tu foto aquí o haz clic para buscar ]
Description       →  [Noche de música en vivo en The Merc un viernes]
Category          →  ○ Food  ○ Drinks  ● Live Music  ○ Venue  ○ People
Display Order     →  [5]   ← Número menor = aparece primero en la galería
```

**Paso 4.** Haz clic en **Publish**.

La foto aparece en la galería en aproximadamente 1 hora.

---

### Cómo controlar el orden de las fotos

Cada foto tiene un número de **Display Order** (orden de aparición). Los números menores aparecen primero.

Ejemplo de orden:
```
Orden 1  →  Concierto al aire libre (foto principal — mostrar primero)
Orden 2  →  Interior del bar
Orden 3  →  Cóctel
Orden 4  →  Pizza
Orden 5  →  Hamburguesa
...
```

Para reordenar, simplemente cambia los números y publica cada item.

---

### Cómo eliminar una foto de la galería

**Paso 1.** Abre la foto en el panel de administración.

**Paso 2.** Haz clic en el **menú de tres puntos** (⋯) → **Delete**.

**Paso 3.** Confirma.

La foto se elimina de la galería en aproximadamente 1 hora.

---

### Consejos para las fotos

- **Mejor tamaño:** Al menos 800×600 píxeles (más grande es mejor)
- **Mejores formatos:** JPG o PNG
- Las **fotos horizontales** (más anchas que altas) quedan mejor en el grid de galería
- La **buena iluminación** hace una gran diferencia — evita fotos borrosas u oscuras
- La galería funciona mejor con **12–20 fotos**

---

## Qué Requiere al Desarrollador

Los siguientes cambios no se pueden hacer desde el panel de administración — contacta al desarrollador para estos:

| Qué necesitas cambiar | Por qué lo hace el desarrollador |
|---|---|
| Horarios del negocio (horas de lunes a domingo) | Guardados en un archivo de código |
| Teléfono o dirección | Guardados en un archivo de código |
| Links de redes sociales | Guardados en un archivo de código |
| Nombres de secciones del menú (Pizza, Burgers…) | Parte del diseño del sitio |
| Colores, tipografía, diseño visual | Requiere cambios en el código |
| Añadir o eliminar páginas | Requiere cambios en el código |
| Activar pedidos en línea (Square) | Requiere configuración |
| Cambiar la foto hero de la página de inicio | Requiere subir al servidor |
| Cambiar el texto de Acerca de o Visítanos | Requiere cambios en el código |

**Contacto del desarrollador:** eduskhd@gmail.com

---

## Activar Pedidos en Línea — Square

Cuando estés listo para aceptar pedidos en línea a través de Square:

1. Comparte tu **URL de pedidos de Square Online** con el desarrollador.
   Se ve así: `https://order.squareup.com/preview/TU_LOCATION`

2. El desarrollador la añade a la configuración del sitio.

3. Todos los botones "Order Online" del sitio enlazarán inmediatamente a tu página de Square.

Actualmente los botones muestran "Coming Soon" — esto es intencional hasta que se configure la URL.

---

## Tarjeta de Referencia Rápida

### Login del panel admin
- URL: `https://the-merc.sanity.studio`
- Login: tu email + contraseña

### Para añadir un evento
Admin → 📅 Eventos → + New → Rellenar campos → Publish → aparece en ~1 min

### Para añadir un item del menú
Admin → 🍕 Menu Items → + New → Rellenar campos → Publish → aparece en ~1 min

### Para ocultar un item del menú
Admin → 🍕 Menu Items → Abrir item → Desmarcar "Available" → Publish

### Para subir una foto a la galería
Admin → 🖼️ Gallery → + New → Subir foto → Rellenar descripción → Publish → aparece en ~1 hora

### Formato de hora
Usar 24 horas: 8 PM = `20:00`, 9 PM = `21:00`, 10 PM = `22:00`

### Después de hacer clic en Publish
- Eventos y menú: aparecen en el sitio en ~**60 segundos**
- Fotos de galería: aparecen en el sitio en ~**1 hora**

---

## Preguntas Frecuentes

**P: Publiqué un evento pero todavía no aparece en el sitio.**
R: Espera 60 segundos y recarga la página. Si después de 2 minutos sigue sin aparecer, verifica que la fecha sea hoy o en el futuro (los eventos pasados se ocultan automáticamente).

**P: ¿Puedo programar eventos con meses de anticipación?**
R: Sí. Añade el evento con cualquier fecha futura y aparecerá en el sitio inmediatamente, ordenado por fecha.

**P: ¿Qué pasa con los eventos viejos?**
R: Desaparecen del sitio automáticamente cuando pasa su fecha. No es necesario borrarlos — se quedan en el panel para tu historial.

**P: Eliminé una foto pero sigue apareciendo en la galería.**
R: La galería se actualiza cada hora. Espera hasta 60 minutos y desaparecerá.

**P: ¿Puedo añadir una sección de "especiales del día" o "ofertas del fin de semana"?**
R: Sí — añádelos como items del menú con el tag "New" y una nota explicando las fechas. Contacta al desarrollador si necesitas una sección dedicada a especiales.

**P: Otra persona necesita acceso al panel de administración.**
R: Contacta al desarrollador — podemos invitar a usuarios adicionales con su propio login.

**P: El sitio se ve diferente en mi teléfono que en la computadora.**
R: El sitio está diseñado para adaptarse a todos los tamaños de pantalla — esto es normal e intencional. En móvil, también hay una barra de acceso rápido en la parte inferior con botones de Menú, Order, Eventos y Cómo Llegar.

---

## ¿Necesitas ayuda?

- **Preguntas sobre el panel admin:** eduskhd@gmail.com
- **Emergencias (el sitio no funciona):** eduskhd@gmail.com
- **Soporte de Sanity:** sanity.io/docs

---

*The Merc Website — Guía para el Cliente*
*Última actualización: Septiembre 2026*
