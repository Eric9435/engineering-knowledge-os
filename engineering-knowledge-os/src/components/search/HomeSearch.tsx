"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { knowledge } from "@/data/core/knowledge";
import { topicRegistry } from "@/data/core/topicRegistry";

export default function HomeSearch() {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const allItems = useMemo(() => {
    const items: any[] = [];

    knowledge.forEach((domain) => {
      domain.categories.forEach((category) => {
        category.topics.forEach((topic) => {
          const topicData = topicRegistry[topic.id];

          items.push({
            type: "Topic",
            title: topic.title,
            domain: domain.title,
            category: category.title,
            href: `/topic/${domain.id}/${category.id}/${topic.id}`,
          });

          topicData?.microTopics?.forEach((micro: any) => {
            items.push({
              type: "Micro",
              title: micro.title,
              domain: domain.title,
              category: category.title,
              topic: topic.title,
              href: `/topic/${domain.id}/${category.id}/${topic.id}#${micro.id}`,
            });
          });
        });
      });
    });

    return items;
  }, []);

  if (!mounted) {
    return (
      <div className="mt-8 max-w-3xl">
        <div className="flex h-[58px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm">
          <Search size={22} className="text-blue-950" />
          <div className="text-sm font-semibold text-slate-400">
            Search engineering topic...
          </div>
        </div>
      </div>
    );
  }

  const results = query.trim()
    ? allItems
        .filter((item) =>
          `${item.title} ${item.domain} ${item.category} ${item.topic || ""}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
        .slice(0, 6)
    : [];

  return (
    <div className="mt-8 max-w-3xl">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <Search size={22} className="text-blue-950" />

        <input
          suppressHydrationWarning
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search engineering topic..."
          className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {results.length > 0 && (
        <div className="mt-3 max-h-[320px] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          {results.map((item, index) => (
            <Link
              key={`${item.href}-${index}`}
              href={item.href}
              className="block border-b border-slate-100 px-5 py-3 transition hover:bg-blue-50"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-black text-blue-950">{item.title}</p>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-500">
                  {item.type}
                </span>
              </div>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                {item.domain} → {item.category}
                {item.topic ? ` → ${item.topic}` : ""}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
