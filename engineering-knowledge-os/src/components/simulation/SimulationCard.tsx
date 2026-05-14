type Props = {
  title: string;
  type: string;
  description: string;
};

export default function SimulationCard({
  title,
  type,
  description
}: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex rounded-full bg-blue-950 px-3 py-1 text-xs font-black text-white">
        {type}
      </div>

      <h2 className="text-2xl font-black text-blue-950">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          "Physics",
          "Math",
          "Simulation",
          "Visualization"
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-slate-50 px-3 py-2 text-center text-xs font-black text-slate-600"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
