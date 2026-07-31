# Deployment

All personal content lives in **`src/config/profile.ts`** — edit that one file and every
section (nav, hero, about, skills, projects, education, certifications, contact, footer)
updates automatically.

## Option 1 — Lovable (easiest)

Click **Publish** in the editor. You get a live `*.lovable.app` URL and can connect a
custom domain from Project settings → Domains.

## Option 2 — Vercel (recommended for GitHub-based workflow)

1. Push the repo to GitHub.
2. In Vercel: **Add New → Project → Import** your repository.
3. Framework preset: **Vite** (auto-detected).
   - Build command: `npm run build`
   - Output directory: leave as detected
4. Deploy. Every push to `main` redeploys automatically.

No environment variables are required — the site is fully static content driven by the
config file.

## Option 3 — GitHub Pages

GitHub Pages only serves static files, so build locally (or via a GitHub Action) and
publish the build output:

```bash
npm install
npm run build
```

Then either:

- push the generated client output to a `gh-pages` branch, or
- use a workflow such as `actions/deploy-pages` with the build output as the artifact.

If you host at `https://<user>.github.io/<repo>/` rather than at a domain root, add a
`base: "/<repo>/"` entry to `vite.config.ts` so assets resolve correctly.

> Note: this project is built on TanStack Start, which supports server rendering.
> Vercel (or Lovable publish) keeps SSR and the SEO metadata intact; GitHub Pages serves
> the static client build only.

## Custom CV

Drop your PDF into `public/` (e.g. `public/cv.pdf`) and set `cvUrl: "/cv.pdf"` in
`src/config/profile.ts`.
