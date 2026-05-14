import { hvac_automation_001 } from "./micro/hvac-automation-overview";
import { hvac_automation_002 } from "./micro/ahu-control";
import { hvac_automation_003 } from "./micro/fcu-control";
import { hvac_automation_004 } from "./micro/vav-control";
import { hvac_automation_005 } from "./micro/damper-control";
import { hvac_automation_006 } from "./micro/valve-control";
import { hvac_automation_007 } from "./micro/temperature-control";
import { hvac_automation_008 } from "./micro/humidity-control";
import { hvac_automation_009 } from "./micro/static-pressure-control";
import { hvac_automation_010 } from "./micro/co2-control";
import { hvac_automation_011 } from "./micro/schedule-control";
import { hvac_automation_012 } from "./micro/occupancy-control";
import { hvac_automation_013 } from "./micro/night-setback";
import { hvac_automation_014 } from "./micro/free-cooling";
import { hvac_automation_015 } from "./micro/demand-control-ventilation";
import { hvac_automation_016 } from "./micro/hvac-alarm";
import { hvac_automation_017 } from "./micro/hvac-trend";
import { hvac_automation_018 } from "./micro/hvac-optimization";

export const hvac_automation = {
  id: "hvac-automation",
  title: "HVAC Automation",
  summary:
    "Very heavy and complex Automation knowledge architecture for HVAC Automation, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    hvac_automation_001, hvac_automation_002, hvac_automation_003, hvac_automation_004, hvac_automation_005, hvac_automation_006, hvac_automation_007, hvac_automation_008, hvac_automation_009, hvac_automation_010, hvac_automation_011, hvac_automation_012, hvac_automation_013, hvac_automation_014, hvac_automation_015, hvac_automation_016, hvac_automation_017, hvac_automation_018
  ]
};
