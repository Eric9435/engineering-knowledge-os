import { drainage_001 } from "./micro/drainage-system-overview";
import { drainage_002 } from "./micro/waste-pipe";
import { drainage_003 } from "./micro/soil-pipe";
import { drainage_004 } from "./micro/vent-pipe";
import { drainage_005 } from "./micro/trap";
import { drainage_006 } from "./micro/floor-drain";
import { drainage_007 } from "./micro/cleanout";
import { drainage_008 } from "./micro/inspection-chamber";
import { drainage_009 } from "./micro/manhole";
import { drainage_010 } from "./micro/slope-and-gradient";
import { drainage_011 } from "./micro/gravity-drainage";
import { drainage_012 } from "./micro/drainage-ventilation";
import { drainage_013 } from "./micro/odor-control";
import { drainage_014 } from "./micro/blockage-diagnosis";
import { drainage_015 } from "./micro/backflow-in-drainage";
import { drainage_016 } from "./micro/drainage-maintenance";

export const drainage = {
  id: "drainage",
  title: "Drainage",
  summary:
    "Professional plumbing knowledge architecture for Drainage, covering system design, hydraulic meaning, pipe network, equipment, valves, troubleshooting, maintenance and building services application.",
  microTopics: [
    drainage_001, drainage_002, drainage_003, drainage_004, drainage_005, drainage_006, drainage_007, drainage_008, drainage_009, drainage_010, drainage_011, drainage_012, drainage_013, drainage_014, drainage_015, drainage_016
  ]
};
