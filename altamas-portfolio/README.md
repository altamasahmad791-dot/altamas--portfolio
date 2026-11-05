# ALTAMAS® — Personal Portfolio

A dark olive editorial portfolio built with React, TypeScript, Vite, GSAP, Lenis and Motion-ready foundations. The uploaded portrait is included at `public/images/altamas-portrait.png` exactly as supplied.

## Run locally

1. Install Node.js (LTS).
2. Extract this project.
3. Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub + Vercel

1. Create a new empty GitHub repository named `altamas-portfolio`.
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Build Altamas personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/altamas-portfolio.git
git push -u origin main
```

3. Sign in to Vercel using GitHub.
4. Choose **Add New → Project**, import `altamas-portfolio`.
5. Vercel should detect Vite automatically. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Deploy**. Future pushes to `main` will trigger new deployments.

## Before launch

- Add your direct contact email in `src/sections/Contact.tsx` when you have one.
- Add confirmed technology names and project features in `src/sections/Projects.tsx` only when you want them published.
- Replace `YOUR-VERCEL-DOMAIN` in `public/robots.txt` and `public/sitemap.xml` with your actual Vercel domain.
- Add a canonical URL in `index.html` after you know your final domain.
- Add live demo URLs if/when you have them.

## Notes

- No unconfirmed tech stack, project features, employment, awards or live demo links are claimed.
- DSA progress is presented as approximately 80% of the Apna College course syllabus completed, not as mastery.
- Smooth scrolling and GSAP reveals respect `prefers-reduced-motion`.
- The hero sculpture is CSS-based to avoid shipping a heavyweight 3D runtime.
- Google Fonts are loaded from Google Fonts; the rest of the site assets are local.
