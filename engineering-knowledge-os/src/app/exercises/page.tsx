import Navbar from "@/components/layout/Navbar";

export default function Page() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Advanced Professional Module
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            exercises
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Professional engineering knowledge system module for deep technical learning,
            computational modeling, simulations, optimization, automation,
            and industrial intelligence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-black text-blue-950">
            Module Architecture
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Theory",
              "Mathematics",
              "Simulation",
              "Code",
              "Optimization",
              "AI Integration",
              "Engineering",
              "Automation",
              "Research"
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-black text-slate-700"
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
