import { chiller_plant_automation_auto_001 } from "./micro/chiller-plant-control-overview";
import { chiller_plant_automation_auto_002 } from "./micro/chiller-enable";
import { chiller_plant_automation_auto_003 } from "./micro/chiller-start-logic";
import { chiller_plant_automation_auto_004 } from "./micro/chiller-stop-logic";
import { chiller_plant_automation_auto_005 } from "./micro/chw-pump-control";
import { chiller_plant_automation_auto_006 } from "./micro/cdw-pump-control";
import { chiller_plant_automation_auto_007 } from "./micro/cooling-tower-fan-control";
import { chiller_plant_automation_auto_008 } from "./micro/chiller-sequencing";
import { chiller_plant_automation_auto_009 } from "./micro/lead-lag-chiller";
import { chiller_plant_automation_auto_010 } from "./micro/plant-load-calculation";
import { chiller_plant_automation_auto_011 } from "./micro/cop-monitoring";
import { chiller_plant_automation_auto_012 } from "./micro/delta-t-monitoring";
import { chiller_plant_automation_auto_013 } from "./micro/condenser-water-reset";
import { chiller_plant_automation_auto_014 } from "./micro/chw-reset";
import { chiller_plant_automation_auto_015 } from "./micro/low-delta-t-control";
import { chiller_plant_automation_auto_016 } from "./micro/plant-alarm";
import { chiller_plant_automation_auto_017 } from "./micro/plant-trend";
import { chiller_plant_automation_auto_018 } from "./micro/plant-optimization";

export const chiller_plant_automation_auto = {
  id: "chiller-plant-automation",
  title: "Chiller Plant Automation",
  summary:
    "Very heavy and complex Automation knowledge architecture for Chiller Plant Automation, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    chiller_plant_automation_auto_001, chiller_plant_automation_auto_002, chiller_plant_automation_auto_003, chiller_plant_automation_auto_004, chiller_plant_automation_auto_005, chiller_plant_automation_auto_006, chiller_plant_automation_auto_007, chiller_plant_automation_auto_008, chiller_plant_automation_auto_009, chiller_plant_automation_auto_010, chiller_plant_automation_auto_011, chiller_plant_automation_auto_012, chiller_plant_automation_auto_013, chiller_plant_automation_auto_014, chiller_plant_automation_auto_015, chiller_plant_automation_auto_016, chiller_plant_automation_auto_017, chiller_plant_automation_auto_018
  ]
};
