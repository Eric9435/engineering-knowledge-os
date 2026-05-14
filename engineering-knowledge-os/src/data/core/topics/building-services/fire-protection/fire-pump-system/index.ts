import { fire_pump_system_001 } from "./micro/fire-pump-overview";
import { fire_pump_system_002 } from "./micro/main-fire-pump";
import { fire_pump_system_003 } from "./micro/jockey-pump";
import { fire_pump_system_004 } from "./micro/diesel-fire-pump";
import { fire_pump_system_005 } from "./micro/pump-controller";
import { fire_pump_system_006 } from "./micro/pressure-switch";
import { fire_pump_system_007 } from "./micro/pump-start-logic";
import { fire_pump_system_008 } from "./micro/pump-sequencing";
import { fire_pump_system_009 } from "./micro/pump-head";
import { fire_pump_system_010 } from "./micro/pump-flow";
import { fire_pump_system_011 } from "./micro/pump-curve";
import { fire_pump_system_012 } from "./micro/fire-water-tank";
import { fire_pump_system_013 } from "./micro/pressure-maintenance";
import { fire_pump_system_014 } from "./micro/pump-failure";
import { fire_pump_system_015 } from "./micro/fire-pump-testing";
import { fire_pump_system_016 } from "./micro/fire-pump-maintenance";

export const fire_pump_system = {
  id: "fire-pump-system",
  title: "Fire Pump System",
  summary:
    "Professional Fire Protection Engineering knowledge architecture for Fire Pump System, covering life safety systems, fire detection, alarm logic, smoke control, suppression systems, troubleshooting and maintenance.",

  microTopics: [
    fire_pump_system_001, fire_pump_system_002, fire_pump_system_003, fire_pump_system_004, fire_pump_system_005, fire_pump_system_006, fire_pump_system_007, fire_pump_system_008, fire_pump_system_009, fire_pump_system_010, fire_pump_system_011, fire_pump_system_012, fire_pump_system_013, fire_pump_system_014, fire_pump_system_015, fire_pump_system_016
  ]
};
