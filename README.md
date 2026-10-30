# DXQM Portfolio

Personal portfolio for Dao Xuan Quang Minh, built with Next.js App Router and TypeScript. Content comes from `CV_DaoXuanQuangMinh_AI_researcher_robotics (1).pdf` supplied outside this repository and is stored in `src/content/site.ts` for review and updates.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` before publishing. The script runs `npm run typecheck` first: the Next.js build runner's TypeScript config parser fails in this environment, so its internal type check is disabled while the independent TypeScript check remains active. The static export is written to `out/`.

## Content updates

- Edit project, publication, experience, news, and skill records in `src/content/site.ts`.
- Keep numerical claims and dates aligned with the latest approved CV or another verified source.
- The project detail route renders the distinct records in `src/app/projects/[slug]/page.tsx`.
- Add publication author lists, links, abstracts, and BibTeX only after verifying each source. Add a copy control only when a verified citation exists.
- The project art and hero graphic are original CSS diagrams labeled conceptual; they do not depict employer systems.

## GitHub Pages deployment

This repository is prepared for a separate GitHub user-site repository named `cssi87m.github.io`, which publishes at `https://cssi87m.github.io/`. The workflow in `.github/workflows/deploy.yml` runs `npm ci`, type-checks, creates a static export in `out/`, and deploys it whenever `main` is pushed. It also sets the canonical URL used by the sitemap. `trailingSlash: true` exports nested `index.html` files so direct route refreshes work on GitHub Pages.

Create the `cssi87m.github.io` repository in the `cssi87m` GitHub account. In its Settings → Pages, set **Source** to **GitHub Actions**. This folder currently sits under a parent Git repository whose remote is `MY_VLA`; initialize a new repository inside this folder before pushing so the portfolio goes to its own remote.

If using a different repository name, change the workflow's `NEXT_PUBLIC_SITE_URL` and configure `basePath` in `next.config.ts` for the repository path, then test direct links after deployment.

## Asset approvals

No CV download, employer media, private datasets, paper files, or external publication links are included. Before adding any, confirm distribution rights and public URLs with the owner. Keep unpublished resources hidden rather than linking to placeholders.
