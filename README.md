# WebAR Hub (Flower / JoJo)

GitHub Pages site hosting marker-based WebAR projects. Each project lives in its own folder.

| Project | Folder | Status |
|---|---|---|
| Flower Bouquet | `flower/` | production: `flower/production/current/mobile-card-ar.html` |
| JoJo Part 5 (Golden Wind) | `jojo/` | WIP, marker generated (`jojo/markers/`) |

Old URLs (`mobile.html`, `experimental.html`, `ar-debug.html`, `camera-test.html`,
`production/current/...`, `experimental/latest/...`, `debug/...`) are kept as redirect stubs into `flower/`.

## Tree

```text
/
|-- index.html            (hub: links to both projects)
|-- mobile.html, experimental.html, ar-debug.html, camera-test.html   (redirects -> flower/)
|-- production/ experimental/ debug/   (redirect stubs only -> flower/)
|-- flower/
|   |-- production/{current,legacy}/
|   |-- experimental/latest/
|   |-- debug/
|   |-- markers/          (custom-marker.patt / -print.png / -source.png)
|   `-- archive/
|-- jojo/
|   |-- index.html        (placeholder)
|   `-- markers/          (jojo-marker.patt / -print.png / -source.png)
`-- docs/
```
