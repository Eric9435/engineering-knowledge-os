import { pressure_control_001 } from "./micro/pressure-control-overview";
import { pressure_control_002 } from "./micro/static-pressure";
import { pressure_control_003 } from "./micro/dynamic-pressure";
import { pressure_control_004 } from "./micro/residual-pressure";
import { pressure_control_005 } from "./micro/pressure-zone";
import { pressure_control_006 } from "./micro/booster-pressure";
import { pressure_control_007 } from "./micro/pressure-reducing-station";
import { pressure_control_008 } from "./micro/expansion-pressure";
import { pressure_control_009 } from "./micro/water-hammer";
import { pressure_control_010 } from "./micro/surge-control";
import { pressure_control_011 } from "./micro/pressure-gauge";
import { pressure_control_012 } from "./micro/pressure-sensor";
import { pressure_control_013 } from "./micro/low-pressure-fault";
import { pressure_control_014 } from "./micro/high-pressure-fault";
import { pressure_control_015 } from "./micro/pressure-balancing";
import { pressure_control_016 } from "./micro/pressure-optimization";

export const pressure_control = {
  id: "pressure-control",
  title: "Pressure Control",
  summary:
    "Professional plumbing knowledge architecture for Pressure Control, covering system design, hydraulic meaning, pipe network, equipment, valves, troubleshooting, maintenance and building services application.",
  microTopics: [
    pressure_control_001, pressure_control_002, pressure_control_003, pressure_control_004, pressure_control_005, pressure_control_006, pressure_control_007, pressure_control_008, pressure_control_009, pressure_control_010, pressure_control_011, pressure_control_012, pressure_control_013, pressure_control_014, pressure_control_015, pressure_control_016
  ]
};
