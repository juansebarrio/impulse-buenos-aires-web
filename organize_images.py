#!/usr/bin/env python3
"""Clasifica las imágenes ya descargadas en public/images/ moviéndolas a
subcarpetas según la página de origen del sitio actual.
"""

import os
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import urlparse, unquote

import requests
from bs4 import BeautifulSoup


# Orden = prioridad. Si una imagen aparece en varias páginas, gana la primera.
PAGE_CATEGORIES = [
    ("https://www.impulsebuenosaires.org/marchas-del-orgullo",       "marchas"),
    ("https://www.impulsebuenosaires.org/activaciones",              "activaciones"),
    ("https://www.impulsebuenosaires.org/vivir",                     "vivir"),
    ("https://www.impulsebuenosaires.org/dia-en-respuesta-al-vih/sida", "vivir"),
    ("https://www.impulsebuenosaires.org/sobre-impulse-buenos-aires-1", "team"),
    ("https://www.impulsebuenosaires.org",                           "eventos"),
    ("https://www.impulsebuenosaires.org/debates-q",                 "eventos"),
    ("https://www.impulsebuenosaires.org/impulse",                   "eventos"),
    ("https://www.impulsebuenosaires.org/chatbot",                   "eventos"),
    ("https://www.impulsebuenosaires.org/servicios-6",               "eventos"),
]

IMAGES_DIR = Path(__file__).parent / "public" / "images"
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
LOGO_KEYWORDS = ("logo", "favicon", "ahf", "lcaba", "mesa_de_trabajo")
SUBDIRS = ("eventos", "marchas", "activaciones", "vivir", "team", "logos")


def extract_cdn_urls(html):
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
    urls.update(CDN_RE.findall(html))
    return urls


def clean_filename(url):
    path = urlparse(url).path
    name = unquote(os.path.basename(path))
    name = re.sub(r"[^\w.\-]", "_", name)
    return name or "image"


def is_logo(name):
    n = name.lower()
    return any(k in n for k in LOGO_KEYWORDS)


def main():
    if not IMAGES_DIR.exists():
        print(f"✗ no existe {IMAGES_DIR}")
        return 1

    for sub in SUBDIRS:
        (IMAGES_DIR / sub).mkdir(exist_ok=True)

    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})

    classification = {}
    for url, category in PAGE_CATEGORIES:
        try:
            resp = session.get(url, timeout=30)
            resp.raise_for_status()
        except requests.RequestException as exc:
            print(f"✗ no pude leer {url}: {exc}")
            continue
        for img_url in extract_cdn_urls(resp.text):
            name = clean_filename(img_url)
            classification.setdefault(name, category)

    moved = {cat: 0 for cat in SUBDIRS}
    skipped = 0
    unclassified = []

    for path in sorted(IMAGES_DIR.glob("*")):
        if path.is_dir():
            continue
        name = path.name
        category = "logos" if is_logo(name) else classification.get(name)
        if not category:
            unclassified.append(name)
            continue
        dest = IMAGES_DIR / category / name
        if dest.exists():
            skipped += 1
            continue
        shutil.move(str(path), str(dest))
        moved[category] += 1
        print(f"→ {category}/{name}")

    print("\nResumen:")
    for cat in SUBDIRS:
        print(f"  {cat:12s} {moved[cat]}")
    if skipped:
        print(f"  skipped     {skipped} (ya existían en destino)")
    if unclassified:
        print(f"\n{len(unclassified)} sin clasificar (no aparecieron en ninguna página):")
        for n in unclassified:
            print(f"  - {n}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
