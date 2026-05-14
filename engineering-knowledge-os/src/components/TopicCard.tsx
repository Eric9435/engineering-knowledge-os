import Link from "next/link";
import { slugify } from "@/lib/slug";

type Props = {
  domainId: string;
  categoryTitle: string;
  topic: string;
};

export default function TopicCard({
  domainId,
  categoryTitle,
  topic
}: Props) {
  return (
    <Link
      href={`/topic/${domainId}/${slugify(categoryTitle)}/${slugify(topic)}`}
      className="group block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-950">
        Topic
      </div>

      <h3 className="text-2xl font-black text-blue-950">
        {topic}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        Open complete engineering lecture structure.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Theory", "Math", "Code", "Simulation"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
