import Link from "next/link";
import type { Project } from "@/content/site";

export function SectionTitle({file, title, description, action}: {file:string; title:string; description?:string; action?:{label:string;href:string}}) {
  return <div className="section-heading"><div><p className="file-label"><span className="file-dot"/> {file}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>{action && <Link className="text-link" href={action.href}>{action.label} <span aria-hidden="true">↗</span></Link>}</div>;
}

export function ProjectCard({project, index}: {project:Project; index:number}) {
  return <Link className={`project-card project-card-${index % 3}`} href={`/projects/${project.slug}`}>
    <div className="project-art" aria-hidden="true"><div className="art-grid"/><div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/><div className="art-core">{project.category === "Robotics" ? "◎" : project.category === "Multimodal AI" ? "≋" : project.category === "RL" ? "↗" : "⌘"}</div><span className="art-caption">CONCEPTUAL VISUAL / {project.category.toUpperCase()}</span></div>
    <div className="project-body"><div className="card-topline"><span>{project.eyebrow}</span><span aria-hidden="true">↗</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="card-tags">{project.technologies.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-footer"><span>{project.role}</span><strong>View case study <span aria-hidden="true">→</span></strong></div></div>
  </Link>;
}

export function PublicationCard({item}: {item:{slug:string;title:string;venue:string;detail:string;status:string}}) {
  return <Link className="publication-card" href={`/research/${item.slug}`}><div className="pub-icon" aria-hidden="true">↗</div><div><div className="pub-meta"><span>{item.venue}</span><span>{item.status} · {item.detail}</span></div><h3>{item.title}</h3><span className="pub-more">View publication record <span aria-hidden="true">→</span></span></div></Link>;
}

export function Breadcrumbs({items}: {items:{label:string;href?:string}[]}) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item,i) => <li key={`${item.label}-${i}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>;
}
