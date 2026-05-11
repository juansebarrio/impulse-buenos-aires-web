# Impulse Buenos Aires — Web

Sitio de la ONG Impulse Buenos Aires. Astro 4 + Tailwind, deploy en Vercel.

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output estático en dist/
```

## Scripts de imágenes

`download_images.py` y `organize_images.py` se usan para traer todas las
imágenes del sitio actual (alojado en Squarespace) y clasificarlas en las
subcarpetas de `public/images/`. Solo necesitás correrlos si querés
regenerar el set de imágenes desde cero.

```bash
pip install requests beautifulsoup4
python3 download_images.py    # baja a public/images/ filtrando squarespace-cdn.com
python3 organize_images.py    # mueve cada archivo a public/images/<categoría>/
```

`organize_images.py` clasifica usando la página de origen como señal
(prioridad: marchas → activaciones → vivir → team → eventos), con override
a `logos/` por palabras clave en el nombre. Si la página original cambia
de estructura, conviene revisar la lista `PAGE_CATEGORIES` en el script.

> Importante: si las imágenes ya están en subcarpetas, `download_images.py`
> no las detecta como existentes y volvería a bajarlas al root. Hacer el
> ciclo completo (download + organize) o ninguno.

## Estructura

```
src/
  components/  layout/, sections/, ui/ — componentes Astro
  pages/       una ruta por archivo
  content/     team.json y demás datos
  styles/      global.css con variables y directivas Tailwind
public/images/ team/ eventos/ marchas/ activaciones/ vivir/ logos/
```

## Deploy

Vercel toma `vercel.json` automáticamente. Push a `main` dispara el deploy.
Los redirects 301 desde las rutas viejas de Squarespace están definidos ahí.
