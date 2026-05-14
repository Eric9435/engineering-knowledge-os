import Navbar from "@/components/layout/Navbar";
import CodeViewer from "@/components/code/CodeViewer";
import { pythonExamples } from "@/data/code/pythonExamples";

export default function CodeLibraryPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Engineering Programming Library
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            Code Library
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Scientific computing, automation, electrical engineering,
            and building services programming examples.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6 py-10">
        {pythonExamples.map((example) => (
          <CodeViewer
            key={example.title}
            title={example.title}
            language={example.language}
            code={example.code}
          />
        ))}
      </section>
    </main>
  );
}
