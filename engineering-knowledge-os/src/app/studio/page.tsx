import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/common/PageHero";
import StudioClient from "@/components/studio/StudioClient";

export default function StudioPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <PageHero
        label="Real Personal Software"
        title="Knowledge Studio"
        description="Add, edit, and delete your own topics, formulas, and projects. This is your personal engineering knowledge database using browser local storage."
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <StudioClient />
      </section>
    </main>
  );
}
