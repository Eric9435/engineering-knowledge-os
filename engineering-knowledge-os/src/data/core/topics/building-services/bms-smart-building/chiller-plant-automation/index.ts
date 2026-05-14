import { chiller_plant_automation_001 } from "./micro/chiller-plant-automation-overview";
import { chiller_plant_automation_002 } from "./micro/chiller-sequencing";
import { chiller_plant_automation_003 } from "./micro/pump-sequencing";
import { chiller_plant_automation_004 } from "./micro/cooling-tower-sequencing";
import { chiller_plant_automation_005 } from "./micro/lead-lag-logic";
import { chiller_plant_automation_006 } from "./micro/plant-optimization";
import { chiller_plant_automation_007 } from "./micro/chw-reset";
import { chiller_plant_automation_008 } from "./micro/condenser-water-reset";
import { chiller_plant_automation_009 } from "./micro/plant-efficiency";
import { chiller_plant_automation_010 } from "./micro/cop-monitoring";
import { chiller_plant_automation_011 } from "./micro/load-based-control";
import { chiller_plant_automation_012 } from "./micro/demand-limiting";
import { chiller_plant_automation_013 } from "./micro/plant-trend";
import { chiller_plant_automation_014 } from "./micro/plant-alarm";
import { chiller_plant_automation_015 } from "./micro/fault-detection";
import { chiller_plant_automation_016 } from "./micro/plant-analytics";

export const chiller_plant_automation = {
  id: "chiller-plant-automation",
  title: "Chiller Plant Automation",
  summary:
    "Professional Smart Building and BMS Engineering knowledge architecture for Chiller Plant Automation, covering automation systems, protocols, analytics, monitoring, optimization and intelligent building operation.",

  microTopics: [
    chiller_plant_automation_001, chiller_plant_automation_002, chiller_plant_automation_003, chiller_plant_automation_004, chiller_plant_automation_005, chiller_plant_automation_006, chiller_plant_automation_007, chiller_plant_automation_008, chiller_plant_automation_009, chiller_plant_automation_010, chiller_plant_automation_011, chiller_plant_automation_012, chiller_plant_automation_013, chiller_plant_automation_014, chiller_plant_automation_015, chiller_plant_automation_016
  ]
};
