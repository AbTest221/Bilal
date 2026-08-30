# Jannat's 18th Birthday 🎉

A little static birthday website — photos, videos, and a birthday message. Built with plain HTML/CSS/JS, mobile-first, no build step required.

## Preview locally

Just open `index.html` in a browser, or run a local server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

### Option A — Vercel (easiest)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (no build command needed). Click Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```

### Option B — GitHub Pages

1. Push this folder to a GitHub repo.
2. Go to repo **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo>/`.

## Structure

```
index.html
style.css
script.js
assets/
  images/   photo1.jpg, photo2.jpg, photo3.jpg
  videos/   video1.mp4, video2.mp4
```

## Customize

- Edit the message in the `<section class="message-section">` of `index.html`.
- Add/remove photos: drop files in `assets/images/` and add matching `<div class="gallery-item">` blocks.
- Add/remove videos: same idea in `assets/videos/` and the `.video-stack` section.
- Colors live as CSS variables at the top of `style.css` (`--pink`, `--purple`, `--gold`, etc).
