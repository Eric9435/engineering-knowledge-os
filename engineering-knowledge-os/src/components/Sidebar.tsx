type SidebarProps = {
  categories: {
    title: string;
    topics: string[];
  }[];
};

export default function Sidebar({ categories }: SidebarProps) {
  return (
    <aside className="sticky top-24 h-fit rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-lg font-black text-blue-950">
        Categories
      </h2>

      <div className="space-y-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <h3 className="text-sm font-black text-slate-900">
              {cat.title}
            </h3>

            <p className="mt-1 text-xs font-semibold text-slate-500">
              {cat.topics.length} Topics
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
