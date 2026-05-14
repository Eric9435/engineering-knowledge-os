import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { knowledge } from "@/data/core/knowledge";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DomainPage({ params }: Props) {
  const { id } = await params;
  const domain = knowledge.find((d) => d.id === id);

  if (!domain) notFound();

  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <aside className="fixed left-6 top-24 z-40 hidden h-[calc(100vh-120px)] w-[380px] rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm xl:block">
        <h2 className="text-3xl font-black text-blue-950">
          {domain.title}
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          Categories and topics
        </p>

        <div className="mt-6 h-[calc(100vh-260px)] overflow-y-auto pr-2">
          <div className="space-y-5">
            {domain.categories.map((category) => (
              <div key={category.id} className="rounded-2xl bg-slate-50 p-4">
                <h3 className="text-base font-black text-blue-950">
                  {category.title}
                </h3>

                <div className="mt-3 space-y-2">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/topic/${domain.id}/${category.id}/${topic.id}`}
                      className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:border-blue-950 hover:bg-blue-50 hover:text-blue-950"
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="px-6 py-8 xl:ml-[430px]">
        <div className="mx-auto max-w-[1350px] space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
              Domain
            </div>

            <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
              {domain.title}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              {domain.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {domain.categories.map((category) => (
              <div
                key={category.id}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-4xl font-black text-blue-950">
                  {category.title}
                </h2>

                <div className="mt-6 grid gap-3">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/topic/${domain.id}/${category.id}/${topic.id}`}
                      className="block rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-black text-slate-700 transition hover:border-blue-950 hover:bg-blue-50 hover:text-blue-950"
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
