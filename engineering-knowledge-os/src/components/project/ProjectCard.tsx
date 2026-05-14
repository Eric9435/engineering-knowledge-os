type Props = {
  title: string;
  domain: string;
  description: string;
};

export default function ProjectCard({
  title,
  domain,
  description
}: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-950">
        {domain}
      </div>

      <h2 className="text-2xl font-black text-blue-950">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <button className="mt-6 rounded-xl bg-blue-950 px-4 py-2 text-sm font-black text-white">
        Open Project
      </button>
    </div>
  );
}
