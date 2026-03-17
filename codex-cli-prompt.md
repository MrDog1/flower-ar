# Codex CLI Prompt

```markdown
# Goal
Build and publish a marker-based WebAR app that shows a bouquet model and a Japanese message when a custom marker is detected.

# Working directory
- Local path: `C:\Users\IWATA\自作アプリ\AR\Flower_bouche`
- GitHub repository: `https://github.com/MrDog1/flower-ar.git`

# Current state
- The folder already contains `marker.patt` and `marker.png`.
- The app should keep Japanese text as an image asset instead of rendering it with A-Frame text components.
- The app should be deployable to GitHub Pages from the `main` branch root.

# Requirements
1. Create a minimal `index.html` using A-Frame and AR.js marker tracking from pinned CDN URLs.
2. Use `<a-scene embedded arjs="trackingMethod: best; sourceType: webcam; patternRatio: 0.8;">`.
3. Use `<a-marker type="pattern" url="./marker.patt">`.
4. Display these assets on the marker:
   - A local image asset for the Japanese message
   - A local bouquet `.gltf` or `.glb` model
5. Add brief user-facing status text for loading, marker found, and marker lost.
6. Add or update `README.md` with:
   - local preview steps
   - git commands to initialize the repo in this folder
   - GitHub Pages settings steps
7. Initialize git in this folder if needed, add `origin`, and push to `main` if safe.
8. If the remote already has unrelated history, do not force-push. Report the blocker clearly instead.

# Assets to keep or create
- `marker.patt`
- `marker.png`
- `message.png`
- `bouquet.gltf` or `bouquet.glb`
- `index.html`
- `README.md`

# Output format
1. Briefly explain the implementation approach.
2. Make the required file changes.
3. Report verification steps and any blockers.
4. Show the exact git and GitHub Pages steps that were completed or still need user action.
```
