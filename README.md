# Flower Bouquet WebAR

Marker-based WebAR app built with A-Frame and AR.js for GitHub Pages deployment.

## Files

- `index.html`: main AR scene.
- `marker.patt`: pattern file used by AR.js.
- `marker.png`: source pattern image used to generate the marker.
- `pattern-marker.png`: printable marker image with the required black border for camera detection.
- `message.png`: Japanese message card shown above the marker.
- `bouquet.gltf`: placeholder bouquet model. Replace it with a real bouquet asset later if needed.

## Local preview

GitHub Pages serves this as a static site, so test it through a local HTTP server instead of opening the file directly.

```powershell
cd "C:\Users\IWATA\自作アプリ\AR\Flower_bouche"
python -m http.server 8000
```

Then open `http://localhost:8000/` on a phone or desktop browser with camera access.

## Git setup and push

Initialize this folder as the repository, connect it to GitHub, and push `main`.

```powershell
cd "C:\Users\IWATA\自作アプリ\AR\Flower_bouche"
git init
git remote add origin https://github.com/MrDog1/flower-ar.git
git add index.html README.md marker.patt marker.png message.png bouquet.gltf
git commit -m "Add WebAR bouquet app"
git branch -M main
git push -u origin main
```

If `origin` already exists, update it instead:

```powershell
git remote set-url origin https://github.com/MrDog1/flower-ar.git
```

## GitHub Pages

1. Open `https://github.com/MrDog1/flower-ar`.
2. Go to `Settings` > `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Select branch `main` and folder `/(root)`.
5. Save and wait for the Pages deployment to finish.

The published site URL will be:

`https://mrdog1.github.io/flower-ar/`

## Notes

- GitHub Pages requires HTTPS, which is compatible with camera access on mobile browsers.
- Replace `bouquet.gltf` with a higher quality `.glb` or `.gltf` model when ready.
- If the marker is hard to detect, print `marker.png` clearly and keep it flat with good lighting.
