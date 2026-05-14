import { pump_system_001 } from "./micro/pump-system-overview";
import { pump_system_002 } from "./micro/transfer-pump";
import { pump_system_003 } from "./micro/booster-pump";
import { pump_system_004 } from "./micro/submersible-pump";
import { pump_system_005 } from "./micro/duty-standby-pump";
import { pump_system_006 } from "./micro/pump-curve";
import { pump_system_007 } from "./micro/system-curve";
import { pump_system_008 } from "./micro/pump-head";
import { pump_system_009 } from "./micro/flow-rate";
import { pump_system_010 } from "./micro/npsh";
import { pump_system_011 } from "./micro/cavitation";
import { pump_system_012 } from "./micro/pressure-switch";
import { pump_system_013 } from "./micro/vfd-pump-control";
import { pump_system_014 } from "./micro/pump-sequencing";
import { pump_system_015 } from "./micro/pump-protection";
import { pump_system_016 } from "./micro/pump-troubleshooting";

export const pump_system = {
  id: "pump-system",
  title: "Pump System",
  summary:
    "Professional plumbing knowledge architecture for Pump System, covering system design, hydraulic meaning, pipe network, equipment, valves, troubleshooting, maintenance and building services application.",
  microTopics: [
    pump_system_001, pump_system_002, pump_system_003, pump_system_004, pump_system_005, pump_system_006, pump_system_007, pump_system_008, pump_system_009, pump_system_010, pump_system_011, pump_system_012, pump_system_013, pump_system_014, pump_system_015, pump_system_016
  ]
};
