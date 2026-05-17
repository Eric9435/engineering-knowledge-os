import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { codeRegistry } from "@/data/core/codeRegistry";

export default function CodesPage() {
  const grouped: Record<string, any[]> = {};

  Object.values(codeRegistry).forEach((code: any) => {
    if (!grouped[code.category]) grouped[code.category] = [];
    grouped[code.category].push(code);
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="text-5xl font-black tracking-tight text-blue-950">
            Engineering Codes & Standards
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            Global engineering codes, Singapore standards, China GB/JGJ, HVAC, Fire,
            Electrical, Automation, Smart Building, Software and Scientific Computing standards.
          </p>

          <div className="mt-10 space-y-10">
            {Object.entries(grouped)
              .sort(([a], [b]) => {
                if (a === "singapore") return -1;
                if (b === "singapore") return 1;
                return a.localeCompare(b);
              })
              .map(([category, items]) => (
                <section key={category}>
                  <h2 className="mb-5 text-3xl font-black capitalize text-blue-950">
                    {category.replaceAll("-", " ")}
                    <span className="ml-3 rounded-full bg-blue-100 px-3 py-1 text-sm font-black text-blue-950">
                      {items.length}
                    </span>
                  </h2>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((code: any) => (
                      <Link
                        key={`${code.category}-${code.id}`}
                        href={`/codes/${code.category}/${code.id}`}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="rounded-full bg-blue-950 px-3 py-1 text-xs font-black text-white">
                            {code.organization}
                          </span>

                          <span className="text-xs font-bold capitalize text-slate-400">
                            {code.category.replaceAll("-", " ")}
                          </span>
                        </div>

                        <h3 className="mt-5 text-2xl font-black text-blue-950">
                          {code.code}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                          {code.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
