import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/common/PageHero";
import { portfolioProjects } from "@/data/portfolio/portfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <PageHero label="Career & MSc Portfolio" title="Portfolio Builder" description="Your project portfolio system for Germany MSc applications, GitHub, CV, and professional engineering profile." />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <div key={project} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-blue-950 px-4 py-2 text-sm font-black text-white">
                Project {index + 1}
              </div>
              <h2 className="text-2xl font-black text-blue-950">{project}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Add objective, technology stack, formulas, code, simulation, screenshots, results, and application relevance.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
