"use client";

import Link from "next/link";

type Props = {
  id: string;
  title: string;
  categories: number;
};

export default function DomainLinkCard({
  id,
  title,
  categories
}: Props) {
  return (
    <Link
      href={`/domain/${id}`}
      className="group block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 inline-flex rounded-full bg-blue-950 px-3 py-1 text-xs font-black text-white">
        Domain
      </div>

      <h2 className="text-3xl font-black text-blue-950">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        Open complete technical knowledge system.
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm font-black text-slate-500">
          {categories} Categories
        </div>

        <div className="rounded-xl bg-blue-950 px-4 py-2 text-xs font-black text-white">
          Open
        </div>
      </div>
    </Link>
  );
}
