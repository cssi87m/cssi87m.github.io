import { writeFileSync, existsSync, unlinkSync } from "node:fs";

const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const destination = new URL("../public/sitemap.xml", import.meta.url);
if (!base) {
  if (existsSync(destination)) unlinkSync(destination);
  process.exit(0);
}
new URL(base);
const paths = ["", "projects", "research", "experience", "about", "contact",
  "projects/humanoid-physical-ai", "projects/legal-llm-benchmark", "projects/speech-to-speech-translation",
  "projects/multimodal-speech-scoring", "projects/vietnamese-legal-rag", "projects/better-car-racing",
  "research/vietnamese-legal-knowledge-benchmark", "research/m-lama"];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>${new URL(path ? `${path}/` : "", `${base}/`).href}</loc></url>`).join("\n")}\n</urlset>\n`;
writeFileSync(destination, xml);
