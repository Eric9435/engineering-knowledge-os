import { sanitary_system_001 } from "./micro/sanitary-system-overview";
import { sanitary_system_002 } from "./micro/soil-stack";
import { sanitary_system_003 } from "./micro/waste-stack";
import { sanitary_system_004 } from "./micro/vent-stack";
import { sanitary_system_005 } from "./micro/trap-seal";
import { sanitary_system_006 } from "./micro/wc-connection";
import { sanitary_system_007 } from "./micro/urinal-drainage";
import { sanitary_system_008 } from "./micro/wash-basin-drainage";
import { sanitary_system_009 } from "./micro/floor-trap";
import { sanitary_system_010 } from "./micro/grease-trap";
import { sanitary_system_011 } from "./micro/septic-tank";
import { sanitary_system_012 } from "./micro/sewage-pump";
import { sanitary_system_013 } from "./micro/odor-problem";
import { sanitary_system_014 } from "./micro/sanitary-blockage";
import { sanitary_system_015 } from "./micro/ventilation-fault";
import { sanitary_system_016 } from "./micro/sanitary-maintenance";

export const sanitary_system = {
  id: "sanitary-system",
  title: "Sanitary System",
  summary:
    "Professional plumbing knowledge architecture for Sanitary System, covering system design, hydraulic meaning, pipe network, equipment, valves, troubleshooting, maintenance and building services application.",
  microTopics: [
    sanitary_system_001, sanitary_system_002, sanitary_system_003, sanitary_system_004, sanitary_system_005, sanitary_system_006, sanitary_system_007, sanitary_system_008, sanitary_system_009, sanitary_system_010, sanitary_system_011, sanitary_system_012, sanitary_system_013, sanitary_system_014, sanitary_system_015, sanitary_system_016
  ]
};
