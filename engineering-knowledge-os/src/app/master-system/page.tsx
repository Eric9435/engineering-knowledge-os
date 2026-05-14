import Navbar from "@/components/layout/Navbar";
import MasterDomainCard from "@/components/master-system/MasterDomainCard";
import {
  masterSystem,
  personalUseCases,
  universalTopicStructure
} from "@/data/master-system/masterSystem";

export default function MasterSystemPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Personal Complete Engineering Knowledge System
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            My Complete Technical System
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            A complete personal knowledge platform for Building Services,
            Electrical Engineering, Programming, Scientific Computing,
            and Automation — designed for my own learning, portfolio,
            projects, MSc preparation, and long-term engineering development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6 py-10">
        {masterSystem.map((item) => (
          <MasterDomainCard
            key={item.domain}
            domain={item.domain}
            purpose={item.purpose}
            sections={item.sections}
          />
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-blue-950">
            Personal Use Cases
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {personalUseCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-black text-blue-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-blue-950">
            Every Topic Structure
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {universalTopicStructure.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
              >
                {index + 1}. {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
