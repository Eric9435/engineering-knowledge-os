"use client";

import Link from "next/link";
import { BrainCircuit, ChevronDown } from "lucide-react";
import { knowledge } from "@/data/core/knowledge";
import { codeRegistry } from "@/data/core/codeRegistry";

function getMenuPosition(index: number, total: number) {
  if (index === 0) return "left-0";
  if (index >= total - 2) return "right-0";
  return "left-1/2 -translate-x-1/2";
}

function getCodeGroups() {
  const grouped: Record<string, any[]> = {};

  Object.values(codeRegistry).forEach((code: any) => {
    if (!grouped[code.category]) grouped[code.category] = [];
    grouped[code.category].push(code);
  });

  return grouped;
}

export default function Navbar() {
  const codeGroups = getCodeGroups();

  return (
    <header className="sticky top-0 z-[9999] border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-950 text-white">
            <BrainCircuit size={21} />
          </div>

          <div>
            <h1 className="text-sm font-black text-blue-950">
              Engineering Knowledge OS
            </h1>
            <p className="text-[10px] font-semibold text-slate-500">
              Professional Engineering Platform
            </p>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {knowledge.map((domain, index) => (
            <div key={domain.id} className="group relative">
              <button className="flex items-center gap-1 rounded-xl px-3 py-2 text-[13px] font-black text-slate-700 transition hover:bg-blue-50 hover:text-blue-950">
                {domain.title}
                <ChevronDown size={14} className="transition group-hover:rotate-180" />
              </button>

              <div
                className={`invisible absolute top-full z-[9999] pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 ${getMenuPosition(
                  index,
                  knowledge.length + 1
                )}`}
              >
                <div className="max-h-[68vh] w-[min(920px,92vw)] overflow-y-auto rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-2xl">
                  <h2 className="text-2xl font-black text-blue-950">
                    {domain.title}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {domain.description}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {domain.categories.map((category) => (
                      <div key={category.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <Link href={`/domain/${domain.id}`} className="text-base font-black text-blue-950 hover:text-blue-700">
                          {category.title}
                        </Link>

                        <div className="mt-3 grid gap-1">
                          {category.topics.map((topic) => (
                            <Link
                              key={topic.id}
                              href={`/topic/${domain.id}/${category.id}/${topic.id}`}
                              className="rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-white hover:text-blue-950"
                            >
                              {topic.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-xl px-3 py-2 text-[13px] font-black text-slate-700 transition hover:bg-blue-50 hover:text-blue-950">
              Codes
              <ChevronDown size={14} className="transition group-hover:rotate-180" />
            </button>

            <div className="invisible absolute right-0 top-full z-[9999] pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="max-h-[68vh] w-[min(920px,92vw)] overflow-y-auto rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-2xl">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-2xl font-black text-blue-950">
                      Codes & Standards
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Global engineering codes, Singapore standards, China GB/JGJ, IEC, IEEE, ASHRAE and NFPA.
                    </p>
                  </div>

                  <Link href="/codes" className="rounded-full bg-blue-950 px-4 py-2 text-xs font-black text-white transition hover:bg-blue-900">
                    View All
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {Object.entries(codeGroups)
                    .sort(([a], [b]) => {
                      if (a === "singapore") return -1;
                      if (b === "singapore") return 1;
                      return a.localeCompare(b);
                    })
                    .map(([category, codes]) => (
                      <div key={category} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <Link href="/codes" className="text-base font-black capitalize text-blue-950 hover:text-blue-700">
                          {category.replaceAll("-", " ")}
                          <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-black text-blue-950">
                            {codes.length}
                          </span>
                        </Link>

                        <div className="mt-3 grid gap-1">
                          {(category === "singapore" ? codes.slice(0, 12) : codes.slice(0, 8)).map((code: any) => (
                            <Link
                              key={code.id}
                              href={`/codes/${code.category}/${code.id}`}
                              className="rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-white hover:text-blue-950"
                            >
                              {code.code}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
