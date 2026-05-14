import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/common/PageHero";
import { standards } from "@/data/standards/standards";

export default function StandardsPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />
      <PageHero label="Professional Reference" title="Standards Library" description="Engineering standards and professional references connected to your five core domains." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2">
        {standards.map((group) => (
          <div key={group.area} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">{group.area}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
