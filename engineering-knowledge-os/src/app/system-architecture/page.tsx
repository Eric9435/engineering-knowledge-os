import Navbar from "@/components/layout/Navbar";
import SystemFlow from "@/components/flow/SystemFlow";

export default function SystemArchitecturePage() {
  return (
    <main className="overflow-x-hidden" className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-950">
            Engineering Intelligence Architecture
          </div>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-blue-950">
            System Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Visual architecture graph showing relationships between
            Building Services, Electrical Engineering, Programming,
            Scientific Computing, Automation, AI systems, and
            Digital Twin infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SystemFlow />
      </section>
    </main>
  );
}
