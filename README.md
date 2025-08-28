
# PrevaCare Feature Showcase (React + Vite + Tailwind)

Implements a sticky, scroll-driven Feature Showcase as per the task:
- Right-side clickable points: set active (blue), update iPhone image + heading + body text
- Left/Right arrows: switch features with same updates
- Scroll behavior: section becomes sticky when in view; auto-advance 1 → 5; after last, page scrolls normally
- Mobile responsive: stacked UI, larger tap targets

## Tech
- React + TypeScript (Vite)
- Tailwind CSS (self-contained)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel)
- Import this repo into Vercel
- Framework preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

## Notes
- Images are simple SVGs under `/public` to simulate app screens.
- The sticky scroll experience is implemented by giving the outer container a height of `features.length * 100vh` and keeping the inner panel `position: sticky` at `top: 0`. As you scroll through the container, we map scroll progress to the active feature index.
