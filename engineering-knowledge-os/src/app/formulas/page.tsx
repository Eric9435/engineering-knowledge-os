import Navbar from "@/components/layout/Navbar";
import FormulaCard from "@/components/formula/FormulaCard";
import { formulaLibrary } from "@/data/formulas/formulaLibrary";

export default function FormulaPage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Mathematical Engineering System
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            Formula Library
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2">
        {formulaLibrary.map((formula) => (
          <FormulaCard
            key={formula.title}
            title={formula.title}
            formula={formula.formula}
            category={formula.category}
          />
        ))}
      </section>
    </main>
  );
}
