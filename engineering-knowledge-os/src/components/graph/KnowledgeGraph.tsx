"use client";

import { knowledge } from "@/data/knowledge";

export default function KnowledgeGraph() {
  return (
    <div className="space-y-8">
      {knowledge.map((domain) => (
        <section
          key={domain.id}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-blue-950">
                {domain.title}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Interconnected engineering knowledge architecture
              </p>
            </div>

            <div className="rounded-2xl bg-blue-950 px-5 py-3 text-sm font-black text-white">
              {domain.categories.length} Categories
            </div>
          </div>

          <div className="space-y-5">
            {domain.categories.map((category) => (
              <div
                key={category.title}
                className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-blue-950" />

                  <h3 className="text-xl font-black text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="ml-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {category.topics.map((topic) => (
                    <div
                      key={topic}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-950" />

                        <span className="text-sm font-black text-blue-950">
                          Topic
                        </span>
                      </div>

                      <h4 className="text-sm font-bold leading-6 text-slate-700">
                        {topic}
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Physics",
                          "Math",
                          "Code",
                          "Control",
                          "Optimization"
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
