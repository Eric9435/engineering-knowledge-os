"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { knowledge } from "@/data/core/knowledge";
import { topicRegistry } from "@/data/core/topicRegistry";
import { codeRegistry } from "@/data/core/codeRegistry";

function titleCase(value: string) {
  return value.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function HomeSearch() {
  const [query, setQuery] = useState("");

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
            searchText: `${topic.title} ${domain.title} ${category.title}`,
          });

          topicData?.microTopics?.forEach((micro: any) => {
            items.push({
              type: "Micro",
              title: micro.title,
              domain: domain.title,
              category: category.title,
              topic: topic.title,
              href: `/topic/${domain.id}/${category.id}/${topic.id}#${micro.id}`,
              searchText: `${micro.title} ${topic.title} ${domain.title} ${category.title}`,
            });
          });
        });
      });
    });

    Object.values(codeRegistry).forEach((code: any) => {
      items.push({
        type: "Code",
        title: code.code,
        domain: "Codes & Standards",
        category: code.category,
        topic: code.organization,
        href: `/codes/${code.category}/${code.id}`,
        searchText: `${code.id} ${code.code} ${code.title} ${code.category} ${code.organization} ${code.summary}`,
      });
    });

    return items;
  }, []);

  const q = query.trim().toLowerCase();

  const results = q
    ? allItems
        .filter((item) => item.searchText.toLowerCase().includes(q))
        .sort((a, b) => {
          if (a.type === "Code" && b.type !== "Code") return -1;
          if (b.type === "Code" && a.type !== "Code") return 1;
          return a.title.localeCompare(b.title);
        })
        .slice(0, 50)
    : [];

  return (
    <div className="mt-8 max-w-3xl">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <Search size={22} className="text-blue-950" />

        <input
          suppressHydrationWarning
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, micro lectures, SS, NFPA, IEC, ASHRAE, GB..."
          className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {results.length > 0 && (
        <div className="relative z-[9999] mt-3 max-h-[420px] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {results.map((item, index) => (
            <Link
              key={`${item.href}-${index}`}
              href={item.href}
              className="block cursor-pointer border-b border-slate-100 px-5 py-3 transition hover:relative hover:z-20 hover:bg-blue-50"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-black text-blue-950">
                  {item.type === "Code"
                    ? `${item.title} (${titleCase(String(item.category))})`
                    : item.title}
                </p>

                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-black ${
                    item.type === "Code"
                      ? "bg-blue-950 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                {item.domain} → {titleCase(String(item.category))}
                {item.topic ? ` → ${item.topic}` : ""}
              </p>
            </Link>
          ))}
        </div>
      )}

      {q && results.length === 0 && (
        <div className="mt-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-500">
          No result found.
        </div>
      )}
    </div>
  );
}
