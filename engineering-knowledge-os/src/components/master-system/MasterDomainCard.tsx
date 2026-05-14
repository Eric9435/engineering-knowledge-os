type Props = {
  domain: string;
  purpose: string;
  sections: string[];
};

export default function MasterDomainCard({ domain, purpose, sections }: Props) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-full bg-blue-950 px-4 py-2 text-sm font-black text-white">
        Core Domain
      </div>

      <h2 className="text-3xl font-black text-blue-950">
        {domain}
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {purpose}
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
          >
            {section}
          </div>
        ))}
      </div>
    </section>
  );
}
