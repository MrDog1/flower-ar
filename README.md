# Flower Bouquet WebAR

This repository hosts the GitHub Pages build for the marker-based WebAR project.

The current production page is:

- `production/current/mobile-card-ar.html`

The old experimental URL is still kept for compatibility, but it now redirects to the current production page:

- `experimental/latest/experimental-two-image-ar.html`

## Current Pages

- Current production: `production/current/mobile-card-ar.html`
- Experimental alias: `experimental/latest/experimental-two-image-ar.html`
- Legacy 3D version: `production/legacy/legacy-3d-ar.html`
- AR debug: `debug/ar-marker-debug.html`
- Camera test: `debug/camera-permission-test.html`
- Printable marker: `markers/custom-marker-print.png`

Root compatibility pages remain available:

- `mobile.html` -> current production
- `experimental.html` -> experimental alias
- `ar-debug.html` -> AR debug
- `camera-test.html` -> camera test

## Tree

```text
/
|-- index.html
|-- mobile.html
|-- experimental.html
|-- ar-debug.html
|-- camera-test.html
|-- production/
|   |-- current/
|   |   |-- mobile-card-ar.html
|   |   |-- bouquet-svgrepo.svg
|   |   `-- message-card-reference.svg
|   `-- legacy/
|       |-- legacy-3d-ar.html
|       |-- legacy-bouquet.gltf
|       `-- legacy-message-card.png
|-- experimental/
|   `-- latest/
|       `-- experimental-two-image-ar.html
|-- debug/
|   |-- ar-marker-debug.html
|   |-- camera-permission-test.html
|   `-- hiro.png
|-- markers/
|   |-- custom-marker.patt
|   |-- custom-marker-source.png
|   `-- custom-marker-print.png
|-- docs/
|   `-- codex-cli-prompt.md
`-- archive/
    |-- mobile-card-canvas-ar.html
    |-- bouquet-blue-reference.svg
    |-- bouquet-mobile.svg
    |-- experimental-frame.svg
    |-- mobile-card-1024.jpg
    `-- mobile-card.png
```

## Published URLs

- Hub: `https://mrdog1.github.io/flower-ar/`
- Current production: `https://mrdog1.github.io/flower-ar/production/current/mobile-card-ar.html`
- Experimental alias: `https://mrdog1.github.io/flower-ar/experimental/latest/experimental-two-image-ar.html`
- Printable marker: `https://mrdog1.github.io/flower-ar/markers/custom-marker-print.png`

## Local Preview

Use a local HTTP server instead of opening files directly.

```powershell
cd "C:\Users\IWATA\自作アプリ\AR\Flower_bouche"
python -m http.server 8000
```

Then open one of these:

- `http://localhost:8000/`
- `http://localhost:8000/production/current/mobile-card-ar.html`
- `http://localhost:8000/experimental/latest/experimental-two-image-ar.html`

## Notes

- Current production uses the promoted two-image composition: bouquet SVG plus message-card SVG.
- The marker files under `markers/` now use the newer bouquet pattern from Downloads.
- Legacy and archived files are kept only for rollback or comparison.
