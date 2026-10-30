import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections";
import { experience } from "@/content/site";

export const metadata: Metadata = {title:"Experience",description:"Professional experience across robotics, language systems, speech translation, and multimodal AI."};
export default function Experience() { return <main id="main" className="shell inner-page"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Experience"}]}/><div className="page-heading"><p className="file-label"><span className="file-dot"/> experience.yaml</p><h1>Experience<span className="accent">.</span></h1><p>Research and engineering work spanning robot behavior, legal AI, translation, and speech assessment.</p></div><div className="timeline">{experience.map((e,i)=><article className="timeline-item" key={e.organization}><div className="timeline-date">{e.period}</div><div><span className="timeline-index">0{i+1} / ROLE</span><h2>{e.organization}</h2><h3>{e.role}</h3><p>{e.summary}</p><Link className="text-link" href={`/projects/${e.project}`}>Related case study ↗</Link></div></article>)}</div></main>; }
