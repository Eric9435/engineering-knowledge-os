type Props = {
  title: string;
  formula: string;
  category: string;
};

export default function FormulaCard({
  title,
  formula,
  category
}: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-950">
        {category}
      </div>

      <h2 className="text-2xl font-black text-blue-950">
        {title}
      </h2>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-lg font-black text-slate-800">
        {formula}
      </div>
    </div>
  );
}
