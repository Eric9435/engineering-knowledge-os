import { energy_optimization_control_001 } from "./micro/energy-optimization-overview";
import { energy_optimization_control_002 } from "./micro/schedule-optimization";
import { energy_optimization_control_003 } from "./micro/setpoint-reset";
import { energy_optimization_control_004 } from "./micro/demand-limiting";
import { energy_optimization_control_005 } from "./micro/peak-load-control";
import { energy_optimization_control_006 } from "./micro/occupancy-based-control";
import { energy_optimization_control_007 } from "./micro/adaptive-control";
import { energy_optimization_control_008 } from "./micro/optimal-start-stop";
import { energy_optimization_control_009 } from "./micro/fan-energy-optimization";
import { energy_optimization_control_010 } from "./micro/pump-energy-optimization";
import { energy_optimization_control_011 } from "./micro/chiller-energy-optimization";
import { energy_optimization_control_012 } from "./micro/lighting-energy-control";
import { energy_optimization_control_013 } from "./micro/energy-kpi";
import { energy_optimization_control_014 } from "./micro/energy-baseline";
import { energy_optimization_control_015 } from "./micro/energy-alarm";
import { energy_optimization_control_016 } from "./micro/optimization-analytics";

export const energy_optimization_control = {
  id: "energy-optimization-control",
  title: "Energy Optimization Control",
  summary:
    "Very heavy and complex Automation knowledge architecture for Energy Optimization Control, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    energy_optimization_control_001, energy_optimization_control_002, energy_optimization_control_003, energy_optimization_control_004, energy_optimization_control_005, energy_optimization_control_006, energy_optimization_control_007, energy_optimization_control_008, energy_optimization_control_009, energy_optimization_control_010, energy_optimization_control_011, energy_optimization_control_012, energy_optimization_control_013, energy_optimization_control_014, energy_optimization_control_015, energy_optimization_control_016
  ]
};
