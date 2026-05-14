type Props = {
  title: string;
  value: number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-black uppercase tracking-wide text-slate-400">
        {title}
      </div>

      <div className="mt-3 text-5xl font-black text-blue-950">
        {value}
      </div>
    </div>
  );
}
