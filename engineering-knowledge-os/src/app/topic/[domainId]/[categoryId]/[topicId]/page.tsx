import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ChevronLeft, Home, FolderTree, BookOpen } from "lucide-react";
import { knowledge } from "@/data/core/knowledge";
import { getTopic } from "@/data/core/topicRegistry";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    domainId: string;
    categoryId: string;
    topicId: string;
  }>;
};

export default async function TopicPage({ params }: Props) {
  const { domainId, categoryId, topicId } = await params;

  const domain = knowledge.find((d) => d.id === domainId);
  if (!domain) notFound();

  const category = domain.categories.find((c) => c.id === categoryId);
  if (!category) notFound();

  const topic = category.topics.find((t) => t.id === topicId);
  if (!topic) notFound();

  const topicData = getTopic(topic.id);

  if (!topicData) {
    return (
      <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <h1 className="text-5xl font-black text-blue-950">
              {topic.title}
            </h1>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              This topic structure exists but detailed micro lecture files are
              not added yet.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="px-6 py-8 xl:ml-[420px]">

        {/* SIDEBAR */}

        <aside className="fixed left-6 top-24 z-40 hidden h-[calc(100vh-120px)] w-[360px] overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm xl:block">

          {/* NAVIGATION */}

          <div className="mb-8 space-y-3">

            <Link
              href="/"
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black text-slate-700 transition hover:border-blue-950 hover:bg-blue-50 hover:text-blue-950"
            >
              <Home size={18} />
              Back to Main Dashboard
            </Link>

            <Link
              href={`/domain/${domain.id}`}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black text-slate-700 transition hover:border-blue-950 hover:bg-blue-50 hover:text-blue-950"
            >
              <FolderTree size={18} />
              Back to {domain.title} Domain
            </Link>

            <Link
              href={`/domain/${domain.id}#${category.id}`}
              className="flex items-center gap-3 rounded-2xl border border-blue-950 bg-blue-950 px-4 py-4 text-sm font-black text-white shadow-sm transition hover:bg-blue-900"
            >
              <BookOpen size={18} />
              Back to {category.title}
            </Link>

          </div>

          {/* TOPIC HEADER */}

          <div className="mb-6 border-t border-slate-200 pt-6">

            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-950">
              Topic
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight text-blue-950">
              {topicData.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Micro engineering lecture architecture with separated technical files.
            </p>
          </div>

          {/* MICRO TOPICS */}

          <div className="space-y-3">

            {topicData.microTopics.map((micro: any, microIndex: number) => (
              <a
                key={micro.id || micro.title || microIndex}
                href={`#${micro.id || micro.title || microIndex}`}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black text-slate-700 transition hover:border-blue-950 hover:bg-blue-50 hover:text-blue-950"
              >
                {micro.title}
              </a>
            ))}

          </div>
        </aside>

        {/* MAIN CONTENT */}

        <section className="mx-auto max-w-[1350px] space-y-8">

          {/* HERO */}

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">

            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
              {domain.title} → {category.title}
            </div>

            <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
              {topicData.title}
            </h1>

            <p className="mt-6 max-w-5xl text-lg leading-9 text-slate-600">
              {topicData.summary}
            </p>
          </div>

          {/* MICRO TOPICS */}

          {topicData.microTopics.map((micro: any, index: number) => (
            <article
              key={micro.id || micro.title || index}
              id={micro.id || micro.title || String(index)}
              className="scroll-mt-24 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >

              {/* HEADER */}

              <div className="flex flex-wrap items-center gap-4">

                <div className="inline-flex rounded-full bg-blue-950 px-4 py-2 text-sm font-black text-white">
                  Micro Topic {index + 1}
                </div>

                <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
                  Thermodynamics Layer
                </div>
              </div>

              <h2 className="mt-6 text-5xl font-black tracking-tight text-blue-950">
                {micro.title}
              </h2>

              {/* FLOW */}

              <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">

                <h3 className="text-3xl font-black text-blue-950">
                  Engineering Flow
                </h3>

                <div className="mt-6 overflow-x-auto">
                  <div className="flex lg:min-w-[1000px] items-center gap-4">

                    {(micro.flow || ['Concept','Engineering Meaning','Application']).map((item: string, i: number) => (
                      <div key={`${item}-${i}`} className="flex items-center gap-4">

                        <div className="rounded-2xl bg-blue-950 px-5 py-4 text-center text-sm font-black text-white shadow-sm">
                          {item}
                        </div>

                        {i < (micro.flow || ['Concept','Engineering Meaning','Application']).length - 1 && (
                          <div className="text-3xl font-black text-blue-950">
                            →
                          </div>
                        )}
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              {/* TABLE */}

              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white overflow-hidden">

                <div className="border-b border-slate-200 bg-blue-950 px-6 py-5">
                  <h3 className="text-3xl font-black text-white">
                    Technical Table
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">

                    <thead className="bg-slate-100">
                      <tr>
                        {(micro.table?.headers || ['Layer','Meaning']).map((header: string) => (
                          <th
                            key={header}
                            className="border-b border-slate-200 p-5 text-sm font-black uppercase tracking-wide text-blue-950"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {(micro.table?.rows || [['Content','Professional Myanmar lecture']]).map((row: string[], rowIndex: number) => (
                        <tr
                          key={rowIndex}
                          className="border-b border-slate-100 hover:bg-slate-50"
                        >
                          {row.map((cell: string, cellIndex: number) => (
                            <td
                              key={cellIndex}
                              className="p-5 text-sm font-semibold leading-7 text-slate-700"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              </div>

              {/* LONG LECTURES */}

              <div className="mt-8 space-y-8">

                {(micro.sections || [{ title: micro.title, body: 'ဒီ micro topic အတွက် lecture section ကို ထပ်ရေးရန် လိုသေးသည်။' }]).map((section: any, sectionIndex: number) => (
                  <div
                    key={section.title}
                    className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
                  >

                    <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-blue-950">
                      Section {sectionIndex + 1}
                    </div>

                    <h3 className="mt-5 text-4xl font-black tracking-tight text-blue-950">
                      {section.title}
                    </h3>

                    <div className="mt-6 whitespace-pre-line text-base leading-9 text-slate-700">
                      {section.body}
                    </div>
                  </div>
                ))}

              </div>
            </article>
          ))}

        </section>
      </div>
    </main>
  );
}
