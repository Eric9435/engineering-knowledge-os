import Navbar from "@/components/layout/Navbar";
import WorkspaceCard from "@/components/workspace/WorkspaceCard";
import { workspaceSections, quickActions } from "@/data/workspace/workspace";

export default function MyWorkspacePage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Personal Engineering Workspace
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            My Workspace
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            A personal command center for my engineering knowledge, MSc preparation,
            technical projects, scientific computing practice, automation systems,
            and long-term professional development.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 xl:grid-cols-4">
        {workspaceSections.map((section) => (
          <WorkspaceCard
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-blue-950">
            Quick Actions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => (
              <button
                key={action}
                className="rounded-2xl bg-blue-950 px-5 py-4 text-sm font-black text-white transition hover:bg-blue-900"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
