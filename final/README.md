# DevCard — Final Build

Polished, production-ready version of the DevCard portfolio. This is the **reference design** students can compare against (or remix from) after building their own.

## Features

- Modern light + dark theme (auto-detects system preference, persists choice)
- Sticky blurred header with mobile hamburger nav
- Animated gradient hero with stats and availability badge
- Skills grid with hover lift
- Project cards with filter chips (All / Web / JavaScript / AI)
- Reveal-on-scroll using IntersectionObserver
- Fully responsive (mobile, tablet, desktop)
- Accessible: semantic HTML, ARIA labels, `prefers-reduced-motion` support
- Zero dependencies — vanilla HTML/CSS/JS

## Run locally

Open `index.html` in a browser. That's it.

## Folder structure

```
final/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── README.md
    ├── favicon.png       ← add
    ├── avatar.jpg        ← add
    ├── project-1.jpg     ← add
    ├── project-2.jpg     ← add
    ├── project-3.jpg     ← add
    └── cv.pdf            ← add
```

## Customize

1. Edit text in `index.html` (name, bio, projects, links).
2. Drop your images into `assets/`.
3. Tweak colors / radius / fonts in the `:root` and `body.dark` blocks of `styles.css`.

## Deploy

Push to GitHub → Settings → Pages → Source: `main` / root → Save. Live URL will be `https://<your-username>.github.io/<repo>/`.
