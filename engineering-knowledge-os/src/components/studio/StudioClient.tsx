"use client";

import { useEffect, useState } from "react";

type RecordItem = {
  id: number;
  type: "Topic" | "Formula" | "Project";
  title: string;
  domain: string;
  content: string;
};

const domains = [
  "Building Services",
  "Electrical Engineering",
  "Programming",
  "Scientific Computing",
  "Automation"
];

export default function StudioClient() {
  const [items, setItems] = useState<RecordItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [type, setType] = useState<RecordItem["type"]>("Topic");
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState(domains[0]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("engineering-studio");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  function persist(next: RecordItem[]) {
    setItems(next);
    localStorage.setItem("engineering-studio", JSON.stringify(next));
  }

  function resetForm() {
    setEditingId(null);
    setType("Topic");
    setTitle("");
    setDomain(domains[0]);
    setContent("");
  }

  function saveItem() {
    if (!title.trim() && !content.trim()) return;

    if (editingId) {
      persist(
        items.map((item) =>
          item.id === editingId
            ? { ...item, type, title, domain, content }
            : item
        )
      );
    } else {
      persist([
        {
          id: Date.now(),
          type,
          title,
          domain,
          content
        },
        ...items
      ]);
    }

    resetForm();
  }

  function editItem(item: RecordItem) {
    setEditingId(item.id);
    setType(item.type);
    setTitle(item.title);
    setDomain(item.domain);
    setContent(item.content);
  }

  function deleteItem(id: number) {
    persist(items.filter((item) => item.id !== id));
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
      <section className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-blue-950">
          {editingId ? "Edit Item" : "Add New Item"}
        </h2>

        <label className="mt-6 block text-sm font-black text-slate-600">
          Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as RecordItem["type"])}
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-blue-950"
        >
          <option>Topic</option>
          <option>Formula</option>
          <option>Project</option>
        </select>

        <label className="mt-4 block text-sm font-black text-slate-600">
          Domain
        </label>
        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-blue-950"
        >
          {domains.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <label className="mt-4 block text-sm font-black text-slate-600">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Example: Chiller COP Analyzer"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-blue-950"
        />

        <label className="mt-4 block text-sm font-black text-slate-600">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Definition, formula, code idea, project details, troubleshooting logic..."
          className="mt-2 h-64 w-full rounded-2xl border border-slate-200 px-4 py-3 font-semibold outline-none focus:border-blue-950"
        />

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={saveItem}
            className="rounded-2xl bg-blue-950 px-5 py-4 text-sm font-black text-white hover:bg-blue-900"
          >
            Save
          </button>

          <button
            onClick={resetForm}
            className="rounded-2xl border border-slate-200 px-5 py-4 text-sm font-black text-slate-600 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </section>

      <section>
        <div className="mb-5 grid gap-4 md:grid-cols-3">
          {["Topic", "Formula", "Project"].map((kind) => (
            <div
              key={kind}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-black text-slate-400">
                {kind}s
              </div>
              <div className="mt-2 text-4xl font-black text-blue-950">
                {items.filter((item) => item.type === kind).length}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {items.length === 0 && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center font-bold text-slate-500 shadow-sm">
              No custom items yet. Add your first topic, formula, or project.
            </div>
          )}

          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-950 px-3 py-1 text-xs font-black text-white">
                      {item.type}
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-950">
                      {item.domain}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-blue-950">
                    {item.title || "Untitled"}
                  </h3>

                  <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-600">
                    {item.content}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editItem(item)}
                    className="rounded-xl bg-blue-950 px-4 py-2 text-xs font-black text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-black text-slate-500 hover:bg-slate-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
