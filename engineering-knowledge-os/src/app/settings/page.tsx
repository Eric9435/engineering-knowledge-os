import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/common/PageHero";

export default function SettingsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <PageHero label="System Control" title="Settings" description="Personal configuration area for your Engineering Knowledge OS." />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-blue-950">Design System</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {["White Background", "Dark Blue Primary", "Professional Cards", "Rounded UI", "Engineering Layout", "Personal Use"].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-black text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
