type Props = {
  label: string;
  title: string;
  description: string;
};

export default function PageHero({ label, title, description }: Props) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
          {label}
        </div>
        <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
          {title}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}
