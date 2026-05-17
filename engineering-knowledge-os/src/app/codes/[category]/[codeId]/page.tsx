import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { codeRegistry } from "@/data/core/codeRegistry";

export default async function CodeDetailPage({
  params,
}: {
  params: Promise<{ category: string; codeId: string }>;
}) {
  const { category, codeId } = await params;
  const code = codeRegistry[`${category}-${codeId}`];

  if (!code) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-950 px-4 py-2 text-xs font-black text-white">
                {code.organization}
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black capitalize text-slate-600">
                {code.category.replaceAll("-", " ")}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-blue-950">
              {code.code}
            </h1>

            <p className="mt-5 text-lg leading-9 text-slate-600">
              {code.summary}
            </p>

            <div className="mt-10 space-y-8">
              {code.sections?.map((section: any, index: number) => (
                <section
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
                >
                  <h2 className="text-2xl font-black text-blue-950">
                    {section.title}
                  </h2>

                  <div className="mt-5 whitespace-pre-line leading-9 text-slate-700">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
