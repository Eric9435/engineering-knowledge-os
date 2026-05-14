import Link from "next/link";
import SearchClient from "@/components/search/SearchClient";

export default function SearchPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Link
            href="/"
            className="mb-6 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-blue-950"
          >
            ← Back Home
          </Link>

          <h1 className="text-5xl font-black tracking-tight text-blue-950">
            Knowledge Search
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Search across all domains, categories, and technical topics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SearchClient />
      </section>
    </main>
  );
}
