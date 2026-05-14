import Link from "next/link";
import KnowledgeGraph from "@/components/graph/KnowledgeGraph";

export default function GraphPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Link
            href="/"
            className="mb-6 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-blue-950"
          >
            ← Back Home
          </Link>

          <div className="max-w-5xl">
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
              Engineering Intelligence Architecture
            </div>

            <h1 className="text-5xl font-black tracking-tight text-blue-950">
              Complete Knowledge Graph
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A connected engineering ecosystem showing relationships between
              domains, categories, topics, mathematical systems, software,
              automation, optimization, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <KnowledgeGraph />
      </section>
    </main>
  );
}
