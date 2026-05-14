import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/project/ProjectCard";
import { projectLibrary } from "@/data/projects/projectLibrary";

export default function ProjectsPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Cross-Domain Engineering Projects
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            Project Library
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2">
        {projectLibrary.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            domain={project.domain}
            description={project.description}
          />
        ))}
      </section>
    </main>
  );
}
