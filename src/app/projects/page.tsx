import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections";
import { ProjectFilter } from "@/components/ProjectFilter";

export const metadata: Metadata = {title:"Projects",description:"Robotics, multimodal AI, legal language systems, and reinforcement learning projects by Dao Xuan Quang Minh."};
export default function Projects() { return <main id="main" className="shell inner-page"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Projects"}]}/><div className="page-heading"><p className="file-label"><span className="file-dot"/> projects/</p><h1>Projects<span className="accent">.</span></h1><p>Six selected projects across embodied robotics, multimodal AI, language systems, and reinforcement learning. Each case study separates documented work from unavailable details.</p></div><ProjectFilter/></main>; }
