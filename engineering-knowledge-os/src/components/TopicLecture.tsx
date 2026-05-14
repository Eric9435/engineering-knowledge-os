type Props = {
  domainTitle: string;
  categoryTitle: string;
  topic: string;
};

const sections = [
  {
    title: "Definition",
    body: "Core meaning, technical boundary, and exact engineering context of this concept."
  },
  {
    title: "Why It Matters",
    body: "Where this concept appears in real systems, operations, design, troubleshooting, and optimization."
  },
  {
    title: "Physical Meaning",
    body: "The real-world behavior behind the concept: energy, signals, flow, force, pressure, heat, data, or control response."
  },
  {
    title: "Mathematical Model",
    body: "Equations, variables, assumptions, constraints, and system relationships used to represent the concept."
  },
  {
    title: "Engineering Formula",
    body: "Useful formulas, units, parameters, and calculation steps used in practical engineering work."
  },
  {
    title: "Software Implementation",
    body: "How to model, calculate, simulate, visualize, or automate this concept using code."
  },
  {
    title: "Simulation",
    body: "Inputs, outputs, state variables, time behavior, numerical method, and validation approach."
  },
  {
    title: "Control Logic",
    body: "How this concept interacts with PLC, BMS, SCADA, PID, sensors, actuators, alarms, and feedback."
  },
  {
    title: "Failure Modes",
    body: "Common faults, unstable behavior, wrong readings, inefficiency, degradation, and system-level risks."
  },
  {
    title: "Troubleshooting",
    body: "Step-by-step diagnostic thinking: observe symptoms, isolate cause, verify measurement, test action, confirm result."
  },
  {
    title: "Optimization",
    body: "Performance improvement using better design, tuning, scheduling, energy analytics, automation, or numerical optimization."
  },
  {
    title: "Mini Project",
    body: "Build a small practical project that proves understanding through data, code, simulation, or real engineering logic."
  }
];

export default function TopicLecture({ domainTitle, categoryTitle, topic }: Props) {
  return (
    <div className="space-y-5">
      {sections.map((section, index) => (
        <section
          key={section.title}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-950 text-sm font-black text-white">
              {index + 1}
            </div>
            <h2 className="text-2xl font-black text-blue-950">
              {section.title}
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600">
            {section.body}
          </p>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-bold text-slate-700">
              Context: {domainTitle} → {categoryTitle} → {topic}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
