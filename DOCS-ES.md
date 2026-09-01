# The Merc — Documentación Completa

**Sitio web de The Merc** — gastropub, cafetería y venue de música en vivo.
**113 E 2nd Ave, Flandreau, SD 57028 · (605) 573-0913**

---

## Índice

1. [Qué es el sitio web](#1-qué-es-el-sitio-web)
2. [Páginas del sitio](#2-páginas-del-sitio)
3. [Tecnología utilizada](#3-tecnología-utilizada)
4. [Estructura de archivos](#4-estructura-de-archivos)
5. [Archivos de contenido](#5-archivos-de-contenido)
6. [Imágenes](#6-imágenes)
7. [Sistema de diseño](#7-sistema-de-diseño)
8. [Variables de entorno](#8-variables-de-entorno)
9. [Panel de administración — Sanity CMS](#9-panel-de-administración--sanity-cms)
10. [Ordenar en línea — Square](#10-ordenar-en-línea--square)
11. [Comandos de desarrollo](#11-comandos-de-desarrollo)
12. [Despliegue en producción](#12-despliegue-en-producción)

---

## 1. Qué es el sitio web

El sitio web de The Merc es una página profesional para el negocio que incluye:

- Información del negocio (horarios, dirección, teléfono)
- Menú completo (pizza, burgers, good eats, café, bebidas)
- Calendario de eventos y música en vivo
- Galería de fotos
- Sección "Acerca de"
- Integración con redes sociales (Instagram, Facebook, TikTok)
- Botón de "Order Online" conectado a Square (cuando se active)
- SEO completo — Google encontrará el negocio fácilmente
- Diseño adaptado a móvil, tablet y computadora

### Cómo funciona el contenido

El sitio tiene **dos fuentes de contenido**:

| Fuente | Qué contiene | Quién lo edita |
|---|---|---|
| Archivos de datos (`data/`) | Horarios, menú, redes sociales | Desarrollador |
| Sanity CMS (panel admin) | Eventos, galería, items de menú | El cliente directamente |

Cuando Sanity esté activado, el cliente puede editar eventos y fotos desde cualquier navegador sin tocar código. Los cambios aparecen en el sitio en menos de 1 minuto.

---

## 2. Páginas del sitio

### Inicio (`/`)

La página principal del negocio. Contiene:

- **Hero:** Foto de fondo (concierto al atardecer), título principal, botones de acción
- **Info rápida:** Horario de hoy, estado abierto/cerrado, teléfono, dirección
- **Bienvenida:** Texto de presentación del negocio + fotos del bar
- **Comida & Bebida:** 5 tarjetas de categorías del menú con fotos reales
- **Dakota Joe Coffee:** Sección dedicada a la cafetería
- **Próximos eventos:** Muestra los 3 próximos eventos automáticamente
- **Redes sociales:** Instagram, Facebook, TikTok
- **Visítanos:** Dirección, horario completo, cómo llegar

### Menú (`/menu`)

Menú completo con tabs navegables:

| Tab | Contenido |
|---|---|
| 🍕 Pizza | Pizzas (con opción de costra de coliflor) |
| 🍔 Burgers | Hamburguesas artesanales premiadas |
| 🍟 Good Eats | Papas, bratwurst, especiales del día |
| ☕ Coffee | Café de Dakota Joe Coffee Co. |
| 🍺 Drinks | Bloody Marys, cervezas artesanales, cócteles |

Cada tab tiene su propia foto de encabezado. Los items muestran nombre, descripción, precio y tags (vegetariano, gluten-free, etc.).

Se puede ir directamente a un tab con URL: `/menu?tab=pizza`

### Eventos (`/events`)

Calendario de eventos y música en vivo:

- Si hay un evento **esta noche**, aparece un banner destacado al top
- Lista de próximos eventos con foto, fecha, hora y descripción
- Si no hay eventos programados, muestra un estado vacío con link a Facebook
- CTA para seguir en redes sociales

**Actualización automática:** Cuando Sanity esté activo, los eventos nuevos que el cliente publique aparecen en el sitio en aproximadamente 60 segundos.

### Galería (`/gallery`)

Grid de fotos del negocio con:
- Layout tipo masonry (algunas fotos más grandes para variedad visual)
- Efecto hover: overlay con descripción y badge de categoría
- 12 fotos reales del local (bar, comida, bebidas, música, comunidad)

**Con Sanity activo:** el cliente puede subir nuevas fotos directamente desde el panel admin. Aparecen en el sitio en menos de 1 hora.

### Acerca de (`/about`)

Historia y filosofía del negocio:
- Foto del bar interior como hero
- Historia de The Merc en texto
- Fotos del local (concierto, decoración, cafetería)
- Los 4 pilares: Dakota Joe Coffee · Comida · Música en Vivo · Comunidad
- Sección de orgullo por Flandreau, SD

### Visítanos (`/visit`)

Toda la información práctica para llegar:
- Horarios completos (el día de hoy aparece destacado automáticamente)
- Dirección con link a Google Maps
- Teléfono
- Todas las redes sociales
- Espacio reservado para mapa de Google Maps
- Botón para dejar reseña en Google

### 404 (página no encontrada)

Página personalizada que aparece si alguien accede a una URL que no existe. Tiene links de vuelta al inicio, menú y eventos.

---

## 3. Tecnología utilizada

| Tecnología | Para qué sirve |
|---|---|
| **Next.js 15** | Framework principal — genera páginas HTML estáticas, muy rápido |
| **React 19** | Interfaz de usuario |
| **TypeScript** | Previene errores de código — todo tiene tipos definidos |
| **Tailwind CSS** | Estilos visuales |
| **Sanity CMS** | Panel de administración para editar contenido sin código |
| **next-sanity** | Conexión entre el sitio y Sanity |
| **Lucide React** | Iconos |
| **Framer Motion** | Animaciones sutiles |

### Por qué Next.js

Las páginas se generan como HTML puro en el servidor antes de que el visitante las pida. Esto significa:
- Carga muy rápida (menos de 1 segundo)
- Google indexa todo el contenido perfectamente (SEO)
- Funciona sin JavaScript en el navegador del visitante
- Barato de hostear (Vercel gratis para tráfico normal)

---

## 4. Estructura de archivos

```
The Merc/
│
├── app/                    ← Páginas del sitio
│   ├── page.tsx            ← Inicio (/)
│   ├── menu/               ← Menú (/menu)
│   ├── events/             ← Eventos (/events)
│   ├── gallery/            ← Galería (/gallery)
│   ├── about/              ← Acerca de (/about)
│   ├── visit/              ← Visítanos (/visit)
│   ├── layout.tsx          ← Estructura general (navbar, footer, SEO)
│   ├── globals.css         ← Estilos globales y variables de color
│   └── api/square/         ← Rutas de servidor para Square (futuro)
│
├── components/             ← Piezas reutilizables de la interfaz
│   ├── home/               ← Secciones de la página de inicio
│   ├── layout/             ← Navbar, Footer, barra móvil inferior
│   ├── menu/               ← Componente del menú con tabs
│   └── ui/                 ← Botones, encabezados, iconos
│
├── data/                   ← ⚠️ EDITAR AQUÍ para cambiar contenido
│   ├── business.ts         ← Dirección, teléfono, horarios
│   ├── events.ts           ← Lista de eventos (respaldo estático)
│   ├── menu.ts             ← Todo el menú (respaldo estático)
│   └── socials.ts          ← Links de redes sociales
│
├── lib/sanity/             ← Conexión con Sanity CMS
│   ├── client.ts           ← Cliente Sanity (solo activo si está configurado)
│   └── queries.ts          ← Consultas GROQ para eventos, galería, menú
│
├── public/images/          ← Fotos del local
│   ├── hero-bg.jpg         ← Fondo del hero
│   ├── og-image.jpg        ← Imagen para compartir en redes sociales
│   ├── merc-bar.jpg        ← Interior del bar
│   ├── menu-pizza.jpg      ← Pizza para el menú
│   ├── gallery/            ← 12 fotos para la galería
│   └── ...                 ← Más fotos reales del negocio
│
├── studio/                 ← Panel de administración Sanity (independiente)
│   ├── sanity.config.ts    ← Configuración del panel
│   ├── schemas/            ← Definición de eventos, menú, galería
│   └── .env                ← Project ID del studio
│
├── .env.local              ← Variables locales (NO se sube a git)
├── .env.example            ← Plantilla de variables de entorno
└── README.md               ← Guía rápida de comandos
```

---

## 5. Archivos de contenido

Estos archivos en la carpeta `data/` son el contenido estático del sitio. Cuando Sanity esté activo, los eventos y la galería se gestionarán desde el panel admin — estos archivos siguen siendo el respaldo.

### `data/business.ts` — Información del negocio

Contiene la dirección, teléfono, horarios y la lógica de "abierto/cerrado".

**Para cambiar horarios:**
```ts
hours: [
  { day: 'Monday',    open: '07:00', close: '14:00', display: '7:00 AM – 2:00 PM' },
  { day: 'Friday',    open: '07:00', close: '23:00', display: '7:00 AM – 11:00 PM' },
  // etc.
]
```

- `open` y `close`: formato 24 horas — se usan para calcular si está abierto ahora
- `display`: texto que se muestra al visitante
- La zona horaria es `America/Chicago` (Hora Central — Flandreau, SD)

**Para cambiar la dirección o teléfono:**
```ts
address: {
  street: '113 E 2nd Ave',
  city: 'Flandreau',
  state: 'SD',
  zip: '57028',
  googleMapsUrl: 'https://maps.google.com/?q=...',
},
contact: {
  phone: '(605) 573-0913',
  phoneHref: 'tel:+16055730913',
},
```

### `data/events.ts` — Eventos (respaldo estático)

Cuando Sanity NO está activo, los eventos se leen de este archivo.

Estructura de un evento:
```ts
{
  id: 'evento-unico-id',         // ID único (cualquier texto)
  artist: 'Nombre del artista',  // Nombre del evento o artista
  eventType: 'live-music',       // 'live-music' | 'trivia' | 'community' | 'other'
  date: '2026-10-15',            // Formato: YYYY-MM-DD
  startTime: '20:00',            // Hora de inicio (24h, Hora Central)
  endTime: '23:00',              // Hora de fin (opcional)
  description: 'Descripción del evento',
  image: null,                   // Ruta a imagen o null
  ticketUrl: null,               // URL de tickets o null si es gratis
  isFeatured: false,             // true = destacado en la home
},
```

Los eventos pasados se ocultan automáticamente — no hay que borrarlos.

### `data/menu.ts` — Menú (respaldo estático)

Estructura jerárquica: Sección → Categoría → Items

```ts
// Agregar un item de menú
{
  id: 'pizza-margherita',
  name: 'Margherita',
  description: 'Tomate fresco, mozzarella, albahaca.',
  price: '$14.00',
  tags: ['vegetarian'],   // tags opcionales
  note: null,
}
```

Secciones disponibles: `pizza` · `burgers` · `good-eats` · `coffee` · `drinks`

### `data/socials.ts` — Redes sociales

```ts
export const socials = {
  instagram:      { url: 'https://instagram.com/themercsodak',   handle: '@themercsodak' },
  facebook:       { url: 'https://facebook.com/SiouxRiverSpirits', handle: 'The Merc' },
  tiktok:         { url: 'https://tiktok.com/@themercsodak',     handle: '@themercsodak' },
  dakotaJoeCoffee: {
    instagram: 'https://instagram.com/dakotajoesodak',
    handle: '@dakotajoesodak',
  },
}
```

Para actualizar un link, cambiar la `url`. El resto del sitio se actualiza automáticamente.

---

## 6. Imágenes

Todas las fotos están en `public/images/`. Son fotos reales del local, descargadas del listing de Yahoo Local de The Merc.

### Fotos actuales en el sitio

| Archivo | Dónde se usa |
|---|---|
| `hero-bg.jpg` | Fondo del hero de la home (concierto al atardecer) |
| `og-image.jpg` | Imagen cuando se comparte el sitio en redes |
| `merc-bar.jpg` | Interior del bar (About, Welcome) |
| `merc-cocktail.jpg` | Bloody Mary (Welcome, FoodDrink) |
| `merc-events.jpg` | Concierto (Welcome, Events hero y fallback) |
| `merc-community.jpg` | Bar lleno, Halloween (Visit CTA de fondo) |
| `merc-decor.jpg` | Cráneo de longhorn (About) |
| `merc-interior-sign.jpg` | Letrero interior / área de café (About, DakotaJoe, FoodDrink) |
| `merc-bratwurst.jpg` | Plato de bratwurst |
| `merc-burger-cowboy.jpg` | Cowboy Layer Cake Burger |
| `menu-pizza.jpg` | Pizza BBQ (tab de pizza en menú) |
| `menu-burgers.jpg` | Garlic Parmesan Burger (tab de burgers en menú) |
| `menu-good-eats.jpg` | Papas con chile (tab de good eats en menú) |
| `menu-drinks.jpg` | Bar exterior (tab de drinks en menú) |
| `gallery/*.jpg` | 12 fotos de la galería |

### Cómo agregar fotos nuevas (sin Sanity)

1. Colocar el archivo en `public/images/`
2. Referenciarlo en el componente: `/images/nombre-foto.jpg`
3. Siempre usar `<Image>` de Next.js (no `<img>`) para optimización automática

### Con Sanity activo

Las fotos de la galería y eventos se suben directamente desde el panel admin. Sanity gestiona el almacenamiento y optimización automáticamente. No es necesario modificar archivos del proyecto.

---

## 7. Sistema de diseño

### Paleta de colores

| Color | Valor hex | Nombre en código | Uso |
|---|---|---|---|
| Ámbar | `#C4842A` | `amber-merc` | Color principal — botones, acentos, encabezados |
| Negro profundo | `#111110` | `merc-black` | Fondo más oscuro |
| Oscuro | `#1C1C1A` | `merc-dark` | Fondo principal de páginas |
| Superficie | `#252521` | `merc-surface` | Tarjetas, secciones |
| Tarjeta | `#2E2E2A` | `merc-card` | Tarjetas anidadas |
| Borde | `#3A3A35` | `merc-border` | Divisores, bordes |
| Texto suave | `#7A7568` | `merc-muted` | Texto secundario, metadata |
| Crema | `#F5F0E8` | `merc-cream` | Texto principal sobre oscuro |
| Rojo | `#9B3A2E` | `merc-red` | Errores, acentos |

### Tipografía

- **Cuerpo:** Inter (Google Fonts) — texto general
- **Display/Títulos:** Playfair Display (Google Fonts) — headings, títulos de sección

### Clases de botones

| Clase CSS | Apariencia | Uso |
|---|---|---|
| `.btn-primary` | Fondo ámbar, texto oscuro | Acción principal (Order, Get Directions) |
| `.btn-secondary` | Transparente con borde ámbar | Acción secundaria |
| `.btn-ghost` | Transparente, borde y texto ámbar | Acción terciaria (View Menu, etc.) |

---

## 8. Variables de entorno

Las variables de entorno configuran el comportamiento del sitio sin cambiar código.

### Archivo `.env.local` (en el servidor de desarrollo)

```env
# URL pública del sitio (para SEO)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Square — URL de pedidos en línea (Phase 1)
# Dejar vacío para mostrar "Coming Soon"
NEXT_PUBLIC_SQUARE_ORDER_URL=

# Sanity CMS — Panel de administración
# Dejar vacío para usar datos estáticos
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
```

### Variables secretas (solo en servidor, NUNCA en el navegador)

```env
SQUARE_ACCESS_TOKEN=     # Token de Square — NUNCA con prefijo NEXT_PUBLIC_
SQUARE_LOCATION_ID=
SQUARE_ENVIRONMENT=sandbox
```

### Regla de seguridad

Cualquier variable **sin** el prefijo `NEXT_PUBLIC_` es secreta — solo existe en el servidor y nunca llega al navegador del visitante. `SQUARE_ACCESS_TOKEN` jamás debe tener ese prefijo.

---

## 9. Panel de administración — Sanity CMS

### Qué es Sanity

Sanity es un CMS (Content Management System) — un panel de administración en la nube donde el cliente puede editar el contenido del sitio desde cualquier navegador, sin necesidad de código.

El panel se despliega en una URL propia: `https://the-merc.sanity.studio`

El cliente entra con su cuenta de Sanity (email + contraseña) y ve tres secciones:

```
┌─────────────────────────────────────────────┐
│  The Merc — Admin                           │
├──────────────┬──────────────────────────────┤
│              │                              │
│  📅 Events   │   Eventos y música en vivo   │
│              │                              │
│  🍕 Menu     │   Items del menú             │
│              │                              │
│  🖼️ Gallery  │   Fotos de la galería        │
│              │                              │
└──────────────┴──────────────────────────────┘
```

### Qué puede editar el cliente

#### Eventos (`📅 Events`)

Campos disponibles:
- **Artist / Event Name** — Nombre del artista o evento
- **Event Type** — Live Music / Trivia Night / Special Event / Community
- **Date** — Fecha del evento (selector de calendario)
- **Start Time** — Hora de inicio (formato 24h, p. ej. `20:00`)
- **End Time** — Hora de fin (opcional)
- **Description** — Descripción corta del evento
- **Event Photo** — Subir foto del artista o evento (arrastrar y soltar)
- **Ticket URL** — Link de tickets (opcional; si se deja vacío, muestra "Free")
- **Featured Event** — Checkbox para destacarlo en la home

Después de publicar un evento, aparece en el sitio en **menos de 60 segundos**.

#### Items de menú (`🍕 Menu Items`)

Campos disponibles:
- **Name** — Nombre del plato
- **Menu Section** — Pizza / Burgers / Good Eats / Coffee / Drinks
- **Description** — Descripción del plato
- **Price** — Precio (p. ej. `$12` o `$10/$14`)
- **Tags** — Gluten Free / Vegetarian / Vegan / Spicy / New / Popular
- **Photo** — Foto del plato
- **Note** — Nota opcional (p. ej. "Seasonal" o "Cauliflower crust available")
- **Available on Menu** — Desmarcar para ocultar sin borrar

#### Fotos de galería (`🖼️ Gallery Photos`)

Campos disponibles:
- **Photo** — Subir foto (arrastrar y soltar)
- **Description** — Descripción breve (para accesibilidad)
- **Category** — Food / Drinks / Live Music / Venue / People
- **Display Order** — Número para controlar el orden (1 = primero)

Las fotos nuevas aparecen en el sitio en **menos de 1 hora**.

### Pasos para activar Sanity

**Paso 1 — Crear cuenta y proyecto**
1. Ir a [sanity.io](https://sanity.io) → Create free account
2. New Project → Nombre: "The Merc"
3. Dataset: `production` (por defecto)
4. Copiar el **Project ID** (8 caracteres, p. ej. `abc12345`)

**Paso 2 — Configurar el sitio web**

En el archivo `.env.local` del proyecto:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
```

En `studio/.env`:
```env
SANITY_STUDIO_PROJECT_ID=abc12345
```

**Paso 3 — Desplegar el panel admin**

En la terminal, dentro de la carpeta `studio/`:
```bash
cd studio
npm install
npx sanity@latest deploy
```

Sanity preguntará un nombre para la URL. Ponle `the-merc`.
El panel quedará en: **`https://the-merc.sanity.studio`**

Este paso solo se hace una vez.

**Paso 4 — Invitar al cliente**

En el dashboard de Sanity (sanity.io/manage):
1. Ir al proyecto "The Merc"
2. Members → Invite
3. Ingresar el email del cliente
4. Rol: **Editor** (puede editar contenido, no puede cambiar configuración)

**Paso 5 — Configurar CORS** (para que el sitio pueda leer datos)

En sanity.io/manage → API → CORS Origins:
- Agregar `http://localhost:3000` (desarrollo)
- Agregar el dominio de producción cuando esté desplegado (p. ej. `https://themercsd.com`)

**Paso 6 — Reiniciar el servidor**

```bash
npm run dev
```

A partir de este momento, los eventos y galería que el cliente publique en Sanity aparecen automáticamente en el sitio.

### Flujo de trabajo del cliente

```
Cliente entra a the-merc.sanity.studio
    ↓
Añade evento / sube foto / edita menú
    ↓
Hace clic en "Publish"
    ↓
El sitio web detecta el cambio automáticamente
    ↓
Eventos: aparecen en ~60 segundos
Galería: aparece en ~1 hora
```

---

## 10. Ordenar en línea — Square

### Fase 1 — Redirect (listo para activar)

Cuando The Merc tenga su página de pedidos en Square Online, basta con añadir la URL al archivo `.env.local`:

```env
NEXT_PUBLIC_SQUARE_ORDER_URL=https://order.squareup.com/preview/TU_LOCATION_ID
```

Inmediatamente todos los botones "Order Online" del sitio redirigen a esa página. No hace falta cambiar ningún código.

Si se deja vacío, los botones muestran un estado elegante de "Coming Soon".

### Fase 2 — API completa (arquitectura lista)

El sitio ya tiene las rutas de servidor preparadas para integrarse con la API de Square:

- `app/api/square/catalog/route.ts` — lee el catálogo de Square
- `app/api/square/checkout/route.ts` — crea sesiones de pago

Para activar esta fase:
1. `npm install squareup`
2. Añadir credenciales de Square en `.env.local`:
   ```env
   SQUARE_ACCESS_TOKEN=tu_token_secreto
   SQUARE_LOCATION_ID=tu_location_id
   NEXT_PUBLIC_SQUARE_APPLICATION_ID=tu_app_id
   SQUARE_ENVIRONMENT=production
   ```
3. Descomentar la implementación en los archivos de rutas

**Seguridad:** El `SQUARE_ACCESS_TOKEN` es completamente secreto. Solo existe en el servidor — nunca llega al navegador del visitante.

---

## 11. Comandos de desarrollo

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000 (o 3001/3002 si el puerto está ocupado)

# Compilar para producción
npm run build

# Iniciar servidor de producción (tras build)
npm run start

# Verificar tipos TypeScript
npx tsc --noEmit

# Ejecutar linter
npm run lint
```

### Si hay problemas de caché

```bash
# PowerShell (Windows)
Remove-Item -Recurse -Force .next
npm run dev
```

### Sanity Studio (local)

```bash
cd studio
npm install       # solo la primera vez
npm run dev       # studio en http://localhost:3333
npm run deploy    # desplegar a sanity.studio
```

---

## 12. Despliegue en producción

### Vercel (recomendado)

Vercel es la plataforma oficial de Next.js — despliegue en un clic, HTTPS automático, CDN global.

1. Subir el proyecto a GitHub
2. Ir a [vercel.com](https://vercel.com) → Import Project → seleccionar el repo
3. En "Environment Variables" añadir todas las variables del `.env.local`
4. Deploy → la URL de producción queda lista en ~2 minutos

Cada vez que se haga `git push`, Vercel redespliega automáticamente.

### Cloudflare Pages

1. `npm run build`
2. Subir la carpeta `.next/` a Cloudflare Pages
3. Configurar variables de entorno en el dashboard

### Variables de entorno en producción

En el dashboard de Vercel/Cloudflare, añadir:

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL real del sitio (p. ej. `https://themercsd.com`) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Project ID de Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SQUARE_ORDER_URL` | URL de pedidos de Square (cuando esté listo) |
| `SQUARE_ACCESS_TOKEN` | Token secreto de Square (Fase 2) |

---

## Redes sociales del negocio

| Plataforma | URL | Handle |
|---|---|---|
| Instagram | instagram.com/themercsodak | @themercsodak |
| Facebook | facebook.com/SiouxRiverSpirits | The Merc |
| TikTok | tiktok.com/@themercsodak | @themercsodak |
| Dakota Joe (Instagram) | instagram.com/dakotajoesodak | @dakotajoesodak |

---

## Información del negocio verificada

| Campo | Valor |
|---|---|
| Nombre | The Merc |
| Dirección | 113 E 2nd Ave, Flandreau, SD 57028 |
| Teléfono | (605) 573-0913 |
| Lunes | 7:00 AM – 2:00 PM |
| Martes – Jueves | 7:00 AM – 9:00 PM |
| Viernes | 7:00 AM – 11:00 PM |
| Sábado | 8:00 AM – 11:00 PM |
| Domingo | 8:00 AM – 8:00 PM |
| Zona horaria | America/Chicago (Hora Central) |

---

*Última actualización: Septiembre 2026*
