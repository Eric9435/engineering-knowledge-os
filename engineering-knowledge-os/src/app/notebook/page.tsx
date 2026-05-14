import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/common/PageHero";
import NotebookClient from "@/components/notebook/NotebookClient";

export default function NotebookPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />
      <PageHero
        label="Personal Technical Memory"
        title="Engineering Notebook"
        description="Save your own formulas, lecture notes, troubleshooting cases, research ideas, project ideas, and MSc preparation notes."
      />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <NotebookClient />
      </section>
    </main>
  );
}
