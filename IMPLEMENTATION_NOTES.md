# Implementation notes

## Completed

- Audited the empty repository and the exact CV named in `PLAN.md` (found in the owner's Downloads directory).
- Created a responsive Next.js App Router site with a working homepage, accessible mobile navigation, projects index and six distinct case study routes, research index and two slim verified publication records, experience, about, and contact pages.
- Added project filtering, metadata, static export, robots, and a sitemap that activates when a production URL is configured.
- Kept structured CV-grounded content in `src/content/site.ts` with basic build-time validation.
- Used original conceptual CSS visuals instead of unapproved photos or system diagrams.
- Verified `npm run typecheck`, `npm run build`, all exported internal destinations, and zero installed dependency advisories after updating Next.js.

## Content inventory

| Source or asset | Status | Usage |
| --- | --- | --- |
| `PLAN.md` | Repository specification | Product and design requirements; not evidence of claims |
| `CV_DaoXuanQuangMinh_AI_researcher_robotics (1).pdf` | Owner file, distribution permission unknown | Factual content source only; not copied to `public/` |
| CSS diagrams | Original conceptual art | Public visual; explicitly labeled conceptual |
| Employer images, video, audio, code, data | Not supplied or approved | Excluded |
| Publication author lists, abstracts, URLs, BibTeX | Not verified | Excluded |

## Required owner decisions before launch

- Confirm the final host and canonical URL, then set `NEXT_PUBLIC_SITE_URL`; configure `basePath` if hosting under a subpath.
- Approve a distributable CV before adding a download button.
- Provide verified paper metadata and public URLs for fuller research pages.
- Review any employer-specific media, diagrams, datasets, or demonstrations before publication.

## Open implementation items

- Case study narrative currently uses typed data rather than MDX. This keeps the initial site easy to review; MDX can be added when longer approved studies are available.
- A branded social sharing image is not included yet. Page titles, descriptions, and Open Graph text are present.
- Browser-level responsive and accessibility QA could not be run because no browser surface is available in this workspace; the source includes responsive breakpoints, semantic landmarks, focus indicators, and reduced-motion handling.
- Next.js 16's build runner cannot parse TypeScript's `--showConfig` output in this environment. Build-time type validation is bypassed in `next.config.ts`; `npm run typecheck` passes independently and must remain part of release checks.
- GitHub Pages workflow is prepared for the `cssi87m.github.io` user-site repository. The owner still needs to create that separate repository, push this folder to it, and select GitHub Actions as the Pages source. No deployment has been made.
