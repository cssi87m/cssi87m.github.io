"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sections";
import { projects } from "@/content/site";

const filters = ["All", "Robotics", "Multimodal AI", "LLM", "RL"] as const;

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? projects : projects.filter(p => p.category === active);
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects by category">
      {filters.map(filter => <button type="button" key={filter} className={`filter-button ${active === filter ? "active" : ""}`} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
    </div>
    <p className="sr-only" aria-live="polite">Showing {shown.length} projects</p>
    <div className="project-grid">{shown.map((project, i) => <ProjectCard key={project.slug} project={project} index={i}/>)}</div>
  </>;
}
