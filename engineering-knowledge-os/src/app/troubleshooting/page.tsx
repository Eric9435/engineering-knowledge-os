import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/common/PageHero";
import { troubleshootingCases } from "@/data/troubleshooting/troubleshooting";

export default function TroubleshootingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <PageHero label="Engineering Diagnosis" title="Troubleshooting Library" description="Professional diagnostic cases for HVAC, electrical, automation, power quality, and communication systems." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2">
        {troubleshootingCases.map((item) => (
          <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">{item.title}</h2>
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <h3 className="font-black text-slate-900">Possible Cause</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.cause}</p>
            </div>
            <div className="mt-4 rounded-2xl bg-blue-50 p-4">
              <h3 className="font-black text-blue-950">Action</h3>
              <p className="mt-2 text-sm leading-7 text-blue-950">{item.action}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
