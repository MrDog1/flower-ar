# Flower Bouquet WebAR

GitHub Pages で公開している WebAR 一式です。  
ルートは入口だけにして、`本番 / 実験 / デバッグ / マーカー / 資料 / 退避` で整理しています。

## Current Pages

- Current production: `production/current/mobile-card-ar.html`
- Latest experiment: `experimental/latest/experimental-two-image-ar.html`
- Legacy 3D version: `production/legacy/legacy-3d-ar.html`
- AR debug: `debug/ar-marker-debug.html`
- Camera test: `debug/camera-permission-test.html`
- Printable marker: `markers/custom-marker-print.png`

Root compatibility pages remain available:

- `mobile.html` -> current production
- `experimental.html` -> latest experiment
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
|   |   `-- mobile-card-ar.html
|   `-- legacy/
|       |-- legacy-3d-ar.html
|       |-- legacy-bouquet.gltf
|       `-- legacy-message-card.png
|-- experimental/
|   `-- latest/
|       |-- experimental-two-image-ar.html
|       |-- bouquet-blue-reference.svg
|       `-- message-card-reference.svg
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
    |-- bouquet-mobile.svg
    |-- experimental-frame.svg
    |-- mobile-card-1024.jpg
    `-- mobile-card.png
```

## Published URLs

- Hub: `https://mrdog1.github.io/flower-ar/`
- Current production: `https://mrdog1.github.io/flower-ar/production/current/mobile-card-ar.html`
- Latest experiment: `https://mrdog1.github.io/flower-ar/experimental/latest/experimental-two-image-ar.html`
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

- Production uses the custom QR-like marker under `markers/`.
- The latest experiment uses a two-image composition: bouquet image + message card image.
- Android-specific rendering workarounds are no longer the priority for the experiment; the main target is Safari / iPad / iPhone style browsing.
