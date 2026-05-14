import { electrical_system_simulation_001 } from "./micro/electrical-simulation-overview";
import { electrical_system_simulation_002 } from "./micro/load-flow-simulation";
import { electrical_system_simulation_003 } from "./micro/short-circuit-simulation";
import { electrical_system_simulation_004 } from "./micro/voltage-drop-simulation";
import { electrical_system_simulation_005 } from "./micro/power-factor-simulation";
import { electrical_system_simulation_006 } from "./micro/harmonic-simulation";
import { electrical_system_simulation_007 } from "./micro/motor-starting-simulation";
import { electrical_system_simulation_008 } from "./micro/protection-coordination-simulation";
import { electrical_system_simulation_009 } from "./micro/transformer-loading-simulation";
import { electrical_system_simulation_010 } from "./micro/generator-backup-simulation";
import { electrical_system_simulation_011 } from "./micro/ups-backup-simulation";
import { electrical_system_simulation_012 } from "./micro/energy-demand-simulation";
import { electrical_system_simulation_013 } from "./micro/electrical-fault-scenario";

export const electrical_system_simulation = {
  id: "electrical-system-simulation",
  title: "Electrical System Simulation",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for Electrical System Simulation, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    electrical_system_simulation_001, electrical_system_simulation_002, electrical_system_simulation_003, electrical_system_simulation_004, electrical_system_simulation_005, electrical_system_simulation_006, electrical_system_simulation_007, electrical_system_simulation_008, electrical_system_simulation_009, electrical_system_simulation_010, electrical_system_simulation_011, electrical_system_simulation_012, electrical_system_simulation_013
  ]
};
