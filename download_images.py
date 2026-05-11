#!/usr/bin/env python3
"""Descarga imágenes de squarespace-cdn.com referenciadas por el sitio
actual de Impulse Buenos Aires y las guarda en public/images/.
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse, unquote

import requests
from bs4 import BeautifulSoup


PAGES = [
    "https://www.impulsebuenosaires.org",
    "https://www.impulsebuenosaires.org/sobre-impulse-buenos-aires-1",
    "https://www.impulsebuenosaires.org/marchas-del-orgullo",
    "https://www.impulsebuenosaires.org/activaciones",
    "https://www.impulsebuenosaires.org/dia-en-respuesta-al-vih/sida",
    "https://www.impulsebuenosaires.org/debates-q",
    "https://www.impulsebuenosaires.org/impulse",
    "https://www.impulsebuenosaires.org/chatbot",
    "https://www.impulsebuenosaires.org/vivir",
    "https://www.impulsebuenosaires.org/servicios-6",
]

OUTPUT_DIR = Path(__file__).parent / "public" / "images"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)
CDN_RE = re.compile(
    r"https?://[^\s'\"<>,&]*squarespace-cdn\.com[^\s'\"<>,&]*",
    re.IGNORECASE,
)
SCAN_ATTRS = ("src", "data-src", "data-image", "data-srcset", "srcset", "content", "href")


def extract_cdn_urls(html):
    """Devuelve un set con todas las URLs de squarespace-cdn.com en el HTML."""
    soup = BeautifulSoup(html, "html.parser")
    urls = set()

    for tag in soup.find_all(True):
        for attr in SCAN_ATTRS:
            value = tag.get(attr)
            if not value:
                continue
            if isinstance(value, list):
                value = " ".join(value)
            urls.update(CDN_RE.findall(value))

    # Fallback: barrido del HTML crudo para CSS inline, scripts, JSON, etc.
    urls.update(CDN_RE.findall(html))
    return urls


def normalize_url(url):
    """Quita la query string para apuntar al asset original y dedupar."""
    parsed = urlparse(url)
    return f"{parsed.scheme}://{parsed.netloc}{parsed.path}"


def clean_filename(url):
    """Toma el basename del path, decodifica y sanitiza."""
    path = urlparse(url).path
    name = unquote(os.path.basename(path))
    name = re.sub(r"[^\w.\-]", "_", name)
    return name or "image"


def download(url, dest, session):
    response = session.get(url, stream=True, timeout=30)
    response.raise_for_status()
    with open(dest, "wb") as fh:
        for chunk in response.iter_content(chunk_size=64 * 1024):
            if chunk:
                fh.write(chunk)


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})

    raw_urls = set()
    for page in PAGES:
        try:
            resp = session.get(page, timeout=30)
            resp.raise_for_status()
        except requests.RequestException as exc:
            print(f"✗ no pude leer {page}: {exc}")
            continue
        raw_urls.update(extract_cdn_urls(resp.text))

    normalized = {normalize_url(u) for u in raw_urls}

    saved_names = set()
    downloaded = 0
    for url in sorted(normalized):
        name = clean_filename(url)
        if name in saved_names:
            continue
        dest = OUTPUT_DIR / name
        if dest.exists():
            saved_names.add(name)
            continue
        try:
            download(url, dest, session)
        except (requests.RequestException, OSError) as exc:
            print(f"✗ {name}: {exc}")
            continue
        saved_names.add(name)
        downloaded += 1
        print(f"✓ {name}")

    print(f"\nTotal descargadas: {downloaded}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
