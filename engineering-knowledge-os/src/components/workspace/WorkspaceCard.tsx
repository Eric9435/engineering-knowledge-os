type Props = {
  title: string;
  items: string[];
};

export default function WorkspaceCard({ title, items }: Props) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-blue-950">
        {title}
      </h2>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
