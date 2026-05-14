"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { knowledge } from "@/data/knowledge";
import { slugify } from "@/lib/slug";

type Item = {
  domainId: string;
  domainTitle: string;
  categoryTitle: string;
  topic: string;
  href: string;
};

export default function SearchClient() {
  const [query, setQuery] = useState("");

  const items: Item[] = useMemo(() => {
    return knowledge.flatMap((domain) =>
      domain.categories.flatMap((category) =>
        category.topics.map((topic) => ({
          domainId: domain.id,
          domainTitle: domain.title,
          categoryTitle: category.title,
          topic,
          href: `/topic/${domain.id}/${slugify(category.title)}/${slugify(topic)}`
        }))
      )
    );
  }, []);

  const results = items.filter((item) => {
    const text = `${item.domainTitle} ${item.categoryTitle} ${item.topic}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <div>
      <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
          <Search className="text-blue-950" size={22} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search domain, category, topic..."
            className="w-full bg-transparent text-lg font-bold text-blue-950 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="mb-5 text-sm font-black text-slate-500">
        {results.length} results
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-950 w-fit">
              {item.domainTitle}
            </div>

            <h2 className="text-xl font-black text-blue-950">
              {item.topic}
            </h2>

            <p className="mt-2 text-sm font-semibold text-slate-500">
              {item.categoryTitle}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
