import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { knowledge } from "@/data/core/knowledge";
import { topicRegistry } from "@/data/core/topicRegistry";
import { BookOpen, Boxes, Layers, LibraryBig, Network } from "lucide-react";
import ProfileCard from "@/components/home/ProfileCard";
import { FadeUp, ScaleIn, BookMotion } from "@/components/home/HomeMotion";
import HomeSearch from "@/components/search/HomeSearch";

function getCounts() {
  const domains = knowledge.length;

  const categories = knowledge.reduce(
    (sum, domain) => sum + domain.categories.length,
    0
  );

  const topics = knowledge.reduce(
    (sum, domain) =>
      sum + domain.categories.reduce((s, category) => s + category.topics.length, 0),
    0
  );

  const microTopics = Object.values(topicRegistry).reduce(
    (sum: number, topic: any) => sum + (topic?.microTopics?.length || 0),
    0
  );

  return { domains, categories, topics, microTopics };
}

function getDomainCounts(domain: any) {
  const categories = domain.categories.length;

  const topics = domain.categories.reduce(
    (sum: number, category: any) => sum + category.topics.length,
    0
  );

  let microTopics = 0;

  domain.categories.forEach((category: any) => {
    category.topics.forEach((topic: any) => {
      microTopics += topicRegistry[topic.id]?.microTopics?.length || 0;
    });
  });

  return { categories, topics, microTopics };
}

export default function Home() {
  const counts = getCounts();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1800px] px-6 py-10">
          <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
            <FadeUp>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <div className="inline-flex rounded-full bg-blue-950 px-4 py-2 text-xs font-black text-white">
                  Engineering Knowledge OS
                </div>

                <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight text-blue-950">
                  Professional Engineering Knowledge Library
                </h1>

                <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
                  Building Services, Electrical Engineering, Programming, Scientific Computing and Automation knowledge platform.
                </p>

                <HomeSearch />

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <ScaleIn delay={0.1}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <LibraryBig className="text-blue-950" />
                      <p className="mt-4 text-4xl font-black text-blue-950">{counts.domains}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500">
                        Main Domains
                      </p>
                    </div>
                  </ScaleIn>

                  <ScaleIn delay={0.18}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <Boxes className="text-blue-950" />
                      <p className="mt-4 text-4xl font-black text-blue-950">{counts.categories}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500">
                        Categories
                      </p>
                    </div>
                  </ScaleIn>

                  <ScaleIn delay={0.26}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <Layers className="text-blue-950" />
                      <p className="mt-4 text-4xl font-black text-blue-950">{counts.topics}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500">
                        Topics
                      </p>
                    </div>
                  </ScaleIn>

                  <ScaleIn delay={0.34}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <Network className="text-blue-950" />
                      <p className="mt-4 text-4xl font-black text-blue-950">{counts.microTopics}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500">
                        Micro Lectures
                      </p>
                    </div>
                  </ScaleIn>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <ProfileCard />
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-12">
        <FadeUp delay={0.1}>
          <h2 className="text-4xl font-black text-blue-950">
            Engineering Book Library
          </h2>
        </FadeUp>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {knowledge.map((domain, index) => {
            const dc = getDomainCounts(domain);

            return (
              <BookMotion key={domain.id} delay={index * 0.08}>
                <Link href={`/domain/${domain.id}`} className="group block">
                  <div className="relative min-h-[420px] rounded-[2rem] transition duration-500 [transform-style:preserve-3d]">
                    <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-blue-950/10 blur-xl transition group-hover:translate-x-6 group-hover:translate-y-6" />

                    <div className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                      <div className="absolute left-0 top-0 h-full w-5 bg-blue-950" />
                      <div className="absolute inset-y-0 left-5 w-10 bg-gradient-to-r from-blue-950/20 to-transparent" />

                      <div className="p-8 pl-12">
                        <div className="flex items-center justify-between">
                          <div className="rounded-full bg-blue-950 px-4 py-2 text-xs font-black text-white">
                            Book {index + 1}
                          </div>

                          <BookOpen className="text-blue-950 transition group-hover:scale-110" />
                        </div>

                        <h3 className="mt-10 text-5xl font-black leading-tight tracking-tight text-blue-950">
                          {domain.title}
                        </h3>

                        <p className="mt-5 min-h-[90px] text-base leading-8 text-slate-600">
                          {domain.description}
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-3">
                          <div className="rounded-2xl bg-slate-50 p-4 text-center">
                            <p className="text-3xl font-black text-blue-950">{dc.categories}</p>
                            <p className="text-xs font-bold text-slate-500">Categories</p>
                          </div>

                          <div className="rounded-2xl bg-slate-50 p-4 text-center">
                            <p className="text-3xl font-black text-blue-950">{dc.topics}</p>
                            <p className="text-xs font-bold text-slate-500">Topics</p>
                          </div>

                          <div className="rounded-2xl bg-slate-50 p-4 text-center">
                            <p className="text-3xl font-black text-blue-950">{dc.microTopics}</p>
                            <p className="text-xs font-bold text-slate-500">Micro</p>
                          </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm font-black text-blue-950">
                            Open Engineering Book →
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </BookMotion>
            );
          })}
        </div>
      </section>
    </main>
  );
}