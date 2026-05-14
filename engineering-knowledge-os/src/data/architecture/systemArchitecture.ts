export const architectureNodes = [
  {
    id: "1",
    title: "Building Services",
    description: "HVAC, BMS, plumbing, energy systems"
  },
  {
    id: "2",
    title: "Electrical Engineering",
    description: "Power systems, machines, protection"
  },
  {
    id: "3",
    title: "Programming",
    description: "Python, software, APIs, databases"
  },
  {
    id: "4",
    title: "Scientific Computing",
    description: "Numerical methods, HPC, simulation"
  },
  {
    id: "5",
    title: "Automation",
    description: "PLC, SCADA, control systems"
  },
  {
    id: "6",
    title: "AI & Optimization",
    description: "Predictive analytics and intelligent systems"
  },
  {
    id: "7",
    title: "Digital Twin",
    description: "Real-time engineering virtual systems"
  }
];

export const architectureEdges = [
  ["1", "5"],
  ["2", "5"],
  ["3", "4"],
  ["4", "6"],
  ["5", "6"],
  ["1", "7"],
  ["5", "7"],
  ["6", "7"]
];
