import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections";
import { publications } from "@/content/site";

export function generateStaticParams() { return publications.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> { const {slug}=await params; const p=publications.find(item=>item.slug===slug); return {title:p?.title ?? "Publication",description:p ? `${p.status} at ${p.venue}, ${p.detail}.` : undefined}; }
export default async function PublicationPage({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const p=publications.find(item=>item.slug===slug); if(!p) notFound(); return <main id="main" className="shell inner-page publication-detail"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Research",href:"/research"},{label:p.venue}]}/><p className="file-label"><span className="file-dot"/> publications/{p.slug}.bib</p><div className="pub-venue">{p.venue} <span>·</span> {p.detail}</div><h1>{p.title}<span className="accent">.</span></h1><div className="pub-status">{p.status}</div><div className="publication-note"><h2>Publication record</h2><p>The CV confirms the title, venue, acceptance status, and presentation or task designation shown here. Author list, abstract, paper URL, code, and BibTeX have not been supplied or verified, so this record does not display them.</p></div></main>; }
