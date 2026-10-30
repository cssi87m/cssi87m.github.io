import type { Metadata } from "next";
import { Breadcrumbs, PublicationCard } from "@/components/sections";
import { publications } from "@/content/site";

export const metadata: Metadata = {title:"Research",description:"Accepted publications by Dao Xuan Quang Minh at NeurIPS 2026 and Interspeech 2026."};
export default function Research() { return <main id="main" className="shell inner-page"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Research"}]}/><div className="page-heading"><p className="file-label"><span className="file-dot"/> publications.bib</p><h1>Research<span className="accent">.</span></h1><p>Accepted work in legal language model evaluation and multimodal spoken English scoring. Paper links and citation metadata will appear when verified.</p></div><div className="research-index">{publications.map(p=><PublicationCard key={p.slug} item={p}/>)}</div></main>; }
