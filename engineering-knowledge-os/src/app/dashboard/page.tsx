import Navbar from "@/components/layout/Navbar";
import StatCard from "@/components/dashboard/StatCard";
import {
  stats,
  activity,
  formulas,
  simulations,
  projects,
  exercises
} from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-5xl">
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
              Professional Engineering Intelligence Platform
            </div>

            <h1 className="text-6xl font-black tracking-tight text-blue-950">
              Engineering Dashboard
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Unified professional ecosystem for engineering, automation,
              programming, scientific computing, simulations, optimization,
              AI systems, and technical knowledge architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-4 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-blue-950">
            Engineering Activities
          </h2>

          <div className="space-y-4">
            {activity.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {item.domain}
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-950 px-3 py-1 text-xs font-black text-white">
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-blue-950">
            Formula Library
          </h2>

          <div className="space-y-4">
            {formulas.map((formula) => (
              <div
                key={formula.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <h3 className="font-black text-slate-900">
                  {formula.title}
                </h3>

                <div className="mt-3 overflow-x-auto rounded-xl bg-white p-4 font-mono text-sm font-bold text-blue-950">
                  {formula.formula}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-blue-950">
            Simulations
          </h2>

          <div className="space-y-3">
            {simulations.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-blue-950">
            Projects
          </h2>

          <div className="space-y-3">
            {projects.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-black text-blue-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-blue-950">
            Exercises
          </h2>

          <div className="space-y-3">
            {exercises.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
