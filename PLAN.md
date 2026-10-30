# PLAN.md — DXQM Personal Portfolio

## 0. Mission

Build a responsive, accessible, content-driven portfolio website for **Dao Xuan Quang Minh**, a Robotics AI Engineer and AI Researcher. It must make his technical contributions in **embodied robotics, multimodal AI, and research** understandable to recruiters in under a minute while allowing researchers to inspect detailed case studies.

**Design synthesis**
- From the supplied **SinanTokmak screenshot**: dark charcoal surfaces, vivid turquoise/cyan accent, clear hero, patterned technical background, image-led cards, readable blog/project layouts.
- From **https://trinhminh11.github.io/**: developer/IDE metaphor, `README.md` introduction, file-like section labels, chronological news, publication-first academic organization, BibTeX functionality.
- **Do not copy** the reference site's exact layout, graphics, source assets, text, icons, or identity. Create an original interpretation.

**North-star headline:** “Building intelligence that perceives, reasons, and acts.”

## 1. Guardrails and source of truth

1. Primary content source: user's CV, `CV_DaoXuanQuangMinh_AI_researcher_robotics (1).pdf`, and explicitly approved subsequent revisions.
2. Every achievement, metric, affiliation, date, paper status, and URL must match the CV or another verified source.
3. Do **not** invent robotics accuracy, latency, robot models, architecture internals, paper links, DOIs, authors, photos, demonstrations, or professional endorsements.
4. Employer projects may be confidential. Do not publish proprietary code, private datasets, robot photos, unreleased diagrams, internal benchmarks, or demos without permission. Use clearly labeled conceptual illustrations where useful.
5. Keep unfinished links and unavailable assets hidden or labeled “Coming soon”; never use nonfunctional CTAs.
6. Maintain content in structured files so the owner can edit it without changing UI components.

## 2. Target audience and success criteria

**Primary:** robotics / Physical AI hiring managers and research engineers.  
**Secondary:** multimodal AI researchers, academic collaborators, graduate admissions, general technical recruiters.

A first-time visitor should quickly discover:
- Current position: Robotics AI Engineer at VinRobotics.
- Strengths: robotics + ROS2/simulation, multimodal foundation models, training/evaluation, model deployment.
- Evidence: technical case studies, actual metrics and accepted research publications.
- Ways to continue: GitHub, verified publications, downloadable CV, email.

Success criteria:
- Hero and one flagship project visible on desktop without excessive scrolling.
- Publications and projects discoverable within one navigation action.
- Distinct project details for all six identified portfolio candidates.
- Accessible on desktop, tablet and small mobile devices.
- No fabricated metrics, placeholder URLs, or unapproved employer material.

## 3. Suggested tech stack

- **Next.js (App Router), TypeScript**, Tailwind CSS.
- Local content: **MDX** for case studies and Markdown-rich pages; **typed JSON/TS data** for project cards, publication metadata, timeline and skills.
- Motion: CSS transitions and optional Motion/Framer Motion for restrained animation.
- Icons: Lucide.
- Images/video: optimized images, poster frames, lazy loading; embedded videos only when approved.
- Deployment: GitHub Pages (static export, if all features are static) **or** Vercel (recommended for easier Next.js deployment). Choose one after assessing repository/deployment constraints.
- No backend required for MVP; use `mailto:` instead of collecting contact form data.

Avoid unnecessary libraries or a CMS until the static portfolio has shipped.

## 4. Design system

### Palette

| Token | Value | Role |
|---|---|---|
| `bg` | `#0B151C` | overall background |
| `surface` | `#11222C` | cards and panes |
| `surfaceElevated` | `#172B36` | hover/active surfaces |
| `border` | `#27404A` | separators and outlines |
| `accent` | `#2DE2CE` | main turquoise emphasis |
| `accentBlue` | `#38BDF8` | secondary technical emphasis |
| `text` | `#F0F7FA` | primary text |
| `muted` | `#A1B7C1` | descriptions and metadata |

### Typography and layout

- Modern sans for body and headings; monospaced font only for filenames, dates, code annotations, labels.
- Major hero headline: strong, spacious and readable; never set long passages in monospace.
- Maximum reading width ~72–80ch; wider gallery grid for projects.
- Desktop: compact top navigation; optional slim sidebar on very wide displays.
- Mobile: collapsed menu, vertical project cards and a single-column narrative.
- Background: subtle topographic-line or graph-grid texture, low contrast and CSS/SVG based.
- Preserve contrast, focus outlines, keyboard navigation and `prefers-reduced-motion`.

### UI primitives

`SiteHeader`, `MobileNav`, `Footer`, `Hero`, `SectionHeading`, `FileTab`, `ProjectCard`, `PublicationCard`, `Timeline`, `SkillGroup`, `Metric`, `Tag`, `MediaGallery`, `ArchitectureDiagram`, `CopyBibtex`, `CallToAction`, `Breadcrumbs`.

The file metaphor is an organizing accent, **not** a literal IDE replica that sacrifices usability.

## 5. Information architecture

```text
/
├── /about
├── /projects
│   ├── /humanoid-physical-ai
│   ├── /legal-llm-benchmark
│   ├── /speech-to-speech-translation
│   ├── /multimodal-speech-scoring
│   ├── /vietnamese-legal-rag
│   └── /better-car-racing
├── /research
│   ├── /vietnamese-legal-knowledge-benchmark
│   └── /m-lama
├── /experience
├── /writing                 # optional; hide until real articles exist
└── /contact                 # optional dedicated page; footer is required
```

**Primary navigation:** Home · Projects · Research · Experience · About · Contact.  
Use developer-inspired section labels (`README.md`, `news.log`, `experience.yaml`, `projects/`, `publications.bib`, `skills.json`, `contact.sh`) as microcopy, not confusing route names.

## 6. Homepage section-by-section

### 6.1 Header and Hero — `README.md`
- Wordmark: `DXQM.` or full name.
- Eyebrow: `ROBOTICS AI ENGINEER / AI RESEARCHER`.
- Title: **Building intelligence that perceives, reasons, and acts.**
- Intro: BSc in Data Science and AI from Hanoi University of Science and Technology, currently working on Physical AI for humanoid robots; interests include embodied intelligence, multimodal foundation models, perception and control.
- Primary CTA: **Explore Projects** → `/projects`.
- Secondary CTA: **Research & Publications** → `/research`.
- Tertiary: GitHub `https://github.com/cssi87m`, CV download **only if actual CV placed in `public/`**, and email.
- Right-side visual: approved robotics image/video; otherwise a clearly labeled conceptual humanoid perception-to-action visualization. Avoid fabricated personal portraits.
- Optional small status chips: ROS2 · MuJoCo · Gazebo · PyTorch.

### 6.2 Featured Work — `projects/`
Three prominent cards, prioritized:
1. Physical AI for Humanoid Robots.
2. Vietnamese Legal LLM Benchmark & Fine-tuning.
3. Japanese Railway Speech-to-Speech Translation.

Each card: category, title, 1–2 sentence summary, role, technologies, one accurate metric if available, approved visual, “Read case study”. Show more projects on `/projects`.

### 6.3 Focus Areas
Three concise pillars:
- **Embodied AI & Robotics:** perception, reasoning, action generation, ROS2 integration, simulation, humanoid control.
- **Multimodal Foundation Models:** language, vision, speech, fine-tuning and efficient inference.
- **Research & Evaluation:** controlled experiments, benchmarks, RL agents and reproducible comparisons.

### 6.4 News — `news.log`
Chronological, factual entries:
- 2026: *M-LAMA* accepted at **Interspeech 2026**, Oral Presentation (as stated on CV).
- 2026: *Benchmarking Vietnamese Legal Knowledge of Large Language Models* accepted at **NeurIPS 2026, Evaluation and Dataset task** (as stated on CV).
- May 2026: Joined **VinRobotics** as Robotics AI Engineer.
- July 2026: BSc completed at Hanoi University of Science and Technology.
Use month only where the CV specifies month; do not fabricate exact days.

### 6.5 Research — `publications.bib`
Feature both CV-listed publications with venue and status. Display verified authors/abstract/paper/code/slides and BibTeX **only after actual metadata is supplied or verified**. Do not manufacture links or BibTeX entries.
- NeurIPS 2026: *Benchmarking Vietnamese Legal Knowledge of Large Language Models*.
- Interspeech 2026: *M-LAMA: Multimodal Automated Scoring of Long-form Spoken English* (Oral Presentation).

### 6.6 Experience — `experience.yaml`
Timeline with clear role/period/summary and links to related case studies:
- **VinRobotics** — Robotics AI Engineer — May 2026–Present: embodied Physical AI, perception-to-action, ROS2, MuJoCo/Gazebo, multimodal HRI.
- **CMC OpenAI** — AI Researcher — Oct 2025–Apr 2026: legal LLM benchmark (22 tasks), fine-tuning pipeline, 65%→80% average accuracy.
- **West Japan Railway Company** — Remote AI Engineer — Oct 2025–Mar 2026: railway announcement translation, synthetic domain data, quantization, BLEU-4 0.56 and ROUGE-L 0.77.
- **Koolsoft Company** — Remote AI Engineer — Oct 2025–Jan 2026: multimodal speech scoring, MAE 0.58 against human expert scores, NVIDIA A30 real-time deployment.

### 6.7 Skills — `skills.json`
Show skill domains, not arbitrary percentages:
- Robotics: ROS2, MuJoCo, Gazebo, perception, navigation, control, human–robot interaction.
- AI / ML: PyTorch, OpenCV, NumPy, scikit-learn, RL, VLA, multimodal models.
- AI systems: LLMs, RAG, vLLM, fine-tuning, quantization, inference optimization.
- Engineering: Python, C++, Shell, Docker, FastAPI, REST APIs, GPU inference.
- English: IELTS 7.5, if relevant and desired.

### 6.8 About / Education
Concise research narrative and timeline:
- Hanoi University of Science and Technology — BSc Data Science and Artificial Intelligence, Sept 2022–Jul 2026, CPA 3.38.
- Hatinh High School for Gifted Students — Math Major, Sept 2019–Jul 2022, CPA 9.2.
Omit secondary school from homepage if space is limited; include it on `/about`.

### 6.9 Contact — `contact.sh`
- GitHub: `https://github.com/cssi87m`
- Email: `daoxuanquangminh2004@gmail.com`
- One short invitation for engineering roles, research collaborations, and academic discussions.
- Include CV download only after confirming a distributable file.

## 7. Project index and six detailed case studies

`/projects`: filterable cards by **Robotics**, **Multimodal AI**, **LLM**, **Research**, **RL**; do not invent project dates/status beyond CV. Filters work with keyboard and screen readers.

### Shared case study template
1. **Hero:** project title, one-line value proposition, category, role, period, tech tags, approved visual.
2. **Overview & problem:** objective, constraints, context, your own contribution.
3. **System architecture:** original diagram, clearly distinguishing verified architecture from illustrative abstraction.
4. **Implementation:** data flow, models, frameworks, design decisions and trade-offs.
5. **Experiments & evaluation:** dataset provenance at an appropriate disclosure level, metrics, baselines, plots, limitations.
6. **Demo/gallery:** clips, screenshots, overlays or interactive visualization if approved.
7. **Results & lessons learned:** only verified numerical claims, caveats and future work.
8. **Resources:** permitted repository, paper, poster, slides, external links; hide absent links.

### Case study inventory

**A. `/projects/humanoid-physical-ai` — Physical AI for Humanoid Robots**
- Focus: real-time perception → multimodal reasoning → action generation → physical execution.
- Explain ROS2 integration, MuJoCo validation, Gazebo navigation/behavior evaluation, speech + vision + human-following.
- Prefer an original high-level flow diagram and authorized sim videos.
- **No quantitative KPIs listed in CV**: leave metric cards out until measurements are validated.
- Flag this project as potentially employer-confidential.

**B. `/projects/legal-llm-benchmark` — Vietnamese Legal LLM Benchmark & Fine-tuning**
- Focus: 22 legal reasoning/document-analysis tasks, training and evaluation pipeline.
- Verified claim: mean accuracy improved **65% → 80%**.
- Show task taxonomy and real per-task plots only if data available. Do not invent baseline model names, dataset sizes, or evaluation specifics.
- Clarify relationship with NeurIPS paper rather than assuming they are identical projects.

**C. `/projects/speech-to-speech-translation` — Japanese Railway Announcements**
- Focus: end-to-end speech-to-speech pipeline; domain-specific data synthesis, translation fine-tuning, quantization for portable devices.
- Verified results: **BLEU-4 = 0.56**, **ROUGE-L = 0.77**.
- Audio samples only if cleared for public release; otherwise an illustrative architecture.

**D. `/projects/multimodal-speech-scoring` — English Speech Scoring**
- Focus: proprietary speech-competition dataset, customized multimodal fine-tuning, quantized inference, NVIDIA A30 deployment.
- Verified metric: **MAE = 0.58** versus human expert scores.
- Note proprietary dataset and avoid publishing private samples. Do not assume publication M-LAMA is exactly the same implementation.

**E. `/projects/vietnamese-legal-rag` — AI Chatbot for Vietnamese Law**
- CV project Jan–Jul 2025; role Project Owner.
- LangChain-based RAG, crawled/normalized Vietnamese legal documents, vector database semantic search, prompt optimization, Facebook API integration.
- If public demo no longer operates, showcase architecture and screenshots rather than a broken demo.

**F. `/projects/better-car-racing` — Reinforcement Learning Agents**
- CV project Sep–Dec 2024; role Co-leader.
- Customized CarRacing environment; DQN, A2C, PPO.
- CV reports average score **600** across agents; preserve the exact claim and context.
- Training reward charts and playback only from real experiments.

## 8. Research routes

`/research`:
- Two publication cards, filtering by venue/year/type only when meaningful.
- Citation button copies **verified** BibTeX.
- Paper/PDF/code/slides icons rendered only when confirmed URLs exist.
- Explain the author's *specific* contribution only if verified.

`/research/[slug]`:
- Title, correct author list, venue, links, abstract, contribution, methodology, results, citation.
- Optionally add figures with captions/permissions and related project links.
- If metadata unavailable, publish a slim verified listing rather than a fabricated full page.

## 9. Content model and source organization

Suggested repository layout:

```text
src/
  app/
    page.tsx
    about/page.tsx
    experience/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    research/page.tsx
    research/[slug]/page.tsx
    contact/page.tsx
  components/
    layout/
    cards/
    sections/
    research/
    diagrams/
  content/
    profile.ts
    experience.ts
    projects.ts
    publications.ts
    skills.ts
    news.ts
    case-studies/*.mdx
  lib/
    content.ts
    metadata.ts
  styles/
    globals.css
public/
  media/
    projects/
    approved/
  cv.pdf                  # only when explicitly cleared to publish
```

Types:
```ts
type Link = { label: string; url: string; kind: "github" | "paper" | "demo" | "slides" | "other" };
type Project = {
  slug: string;
  title: string;
  summary: string;
  domain: "robotics" | "multimodal" | "llm" | "rl";
  role?: string;
  period?: string;
  technologies: string[];
  image?: string;
  imageCaption?: string;
  metrics?: { label: string; value: string; sourceNote?: string }[];
  links: Link[];
  featured: boolean;
  confidentiality: "public" | "requires-review";
};
type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: number;
  status?: string;
  authors?: string[];
  abstract?: string;
  links?: Link[];
  bibtex?: string;
};
```
Use content validation during build (e.g. Zod or equivalent) to prevent invalid URLs, missing slugs, malformed data or duplicate entries.

## 10. Interaction behavior

- Desktop header: sticky, compact and readable.
- Mobile menu: dismissible, keyboard operable, correct `aria-expanded`, closes on navigation.
- Projects: category filter, active state; URL query parameter optional.
- Cards: full-card clickable only if focus and interactive elements remain unambiguous.
- Code/architecture snippets: responsive overflow and copy controls.
- Publication BibTeX: copy only if valid BibTeX exists; announce success accessibly.
- Motion: modest hover effects, staggered entrance or typing flourish if optional; respect reduced-motion.
- Provide consistent breadcrumbs and previous/next project navigation.
- Use direct links for GitHub and email; do not make dummy links.

## 11. Performance, SEO and accessibility

- Use semantic headings, landmark regions, alt text, captions and skip-to-content.
- Verify color contrast (WCAG AA), visible focus rings and no keyboard traps.
- Prefer static generation, optimized image formats and lazy media.
- Avoid autoplaying audio/videos; use controls and poster images.
- Set title/description/Open Graph metadata for each route; add sitemap and robots.
- Track Core Web Vitals and aim for Lighthouse 90+ in accessibility/performance where practical.
- Test 320px, 375px, tablet, 1440px desktop and large screens.
- Avoid personal data collection or analytics by default.

## 12. Implementation milestones

### Phase 0 — Repository and content audit
- [ ] Inspect existing repository/package manager and current deployment setup.
- [ ] Identify reusable existing assets/components without assuming the repo is empty.
- [ ] Confirm publication metadata, media permissions, and publicly shareable CV.
- [ ] Create content inventory noting each asset's license and confidentiality.

### Phase 1 — Foundation
- [ ] Configure Next.js, TS, Tailwind, linting and formatting as needed.
- [ ] Define tokens, fonts, layout grids, buttons, cards and navigation.
- [ ] Implement responsive shell and accessible mobile nav.
- [ ] Add content types, validation and metadata helpers.

### Phase 2 — Homepage
- [ ] Implement hero and clear primary actions.
- [ ] Implement featured projects, research areas and news.
- [ ] Implement publication previews, experience timeline and skill groups.
- [ ] Implement About and Contact with real GitHub/email.
- [ ] Verify content matches CV.

### Phase 3 — Projects
- [ ] Build project index with filters.
- [ ] Build reusable MDX case-study renderer.
- [ ] Publish six case studies with CV-grounded text and placeholder-free visual states.
- [ ] Add diagrams/media when approved; omit unpublished resources.

### Phase 4 — Research and secondary routes
- [ ] Build research index and safe conditional paper links.
- [ ] Implement full publication pages only when verified source metadata exists.
- [ ] Build About, Experience, and Contact routes.
- [ ] Wire cross-links between project, role and publication entries.

### Phase 5 — Quality and launch
- [ ] Run type check, lint, production build and tests.
- [ ] Audit mobile layout, navigation, keyboard accessibility and reduced-motion.
- [ ] Check all outbound links and download files.
- [ ] Check no employer-confidential content or unverifiable claims are published.
- [ ] Add SEO metadata, social sharing image and sitemap.
- [ ] Deploy and confirm all routes load directly on refresh.

## 13. Acceptance criteria / definition of done

- [ ] Responsive complete site, not just a mockup.
- [ ] Distinct original visuals reflecting dark/cyan + research-editor references.
- [ ] All navigation and CTAs function.
- [ ] Six project detail routes exist with clear evidence/unknowns.
- [ ] Two CV-listed research publications accurately represented.
- [ ] Timeline and metrics faithfully match CV.
- [ ] No invented paper links, images, dates, results, endorsements or affiliations.
- [ ] No proprietary employer assets used without documented approval.
- [ ] Keyboard-accessible navigation, readable contrast, mobile-friendly layouts.
- [ ] Build passes; deployed pages and assets work.
- [ ] README explains setup, content updates, preview, deployment, and asset approvals.

## 14. Instructions to the coding agent

1. **Audit the repository first.** Reuse the existing stack where sensible; do not overwrite user code without a clear reason.
2. Implement incrementally in the milestone order; prioritize a working MVP over decorative effects.
3. Treat this PLAN.md as product/design requirements, not proof of any claim not already supported by the CV.
4. When source data or media is missing, use clearly documented TODOs in source **but never fictional public-facing content**.
5. Maintain a brief `IMPLEMENTATION_NOTES.md` of completed tasks, remaining placeholders, and required owner approvals.
6. Before final delivery, list pages created, commands to run, public asset approvals needed, and outstanding issues.
