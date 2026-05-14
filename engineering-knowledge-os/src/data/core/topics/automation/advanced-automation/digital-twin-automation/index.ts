import { digital_twin_automation_001 } from "./micro/digital-twin-automation-overview";
import { digital_twin_automation_002 } from "./micro/physical-system-model";
import { digital_twin_automation_003 } from "./micro/live-data-connection";
import { digital_twin_automation_004 } from "./micro/state-estimation";
import { digital_twin_automation_005 } from "./micro/model-calibration";
import { digital_twin_automation_006 } from "./micro/simulation-link";
import { digital_twin_automation_007 } from "./micro/control-feedback";
import { digital_twin_automation_008 } from "./micro/fault-prediction";
import { digital_twin_automation_009 } from "./micro/performance-prediction";
import { digital_twin_automation_010 } from "./micro/hvac-digital-twin";
import { digital_twin_automation_011 } from "./micro/chiller-digital-twin";
import { digital_twin_automation_012 } from "./micro/pump-digital-twin";
import { digital_twin_automation_013 } from "./micro/energy-digital-twin";
import { digital_twin_automation_014 } from "./micro/automation-decision-support";
import { digital_twin_automation_015 } from "./micro/digital-twin-limitation";
import { digital_twin_automation_016 } from "./micro/digital-twin-maintenance";

export const digital_twin_automation = {
  id: "digital-twin-automation",
  title: "Digital Twin Automation",
  summary:
    "Very heavy and complex Automation knowledge architecture for Digital Twin Automation, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    digital_twin_automation_001, digital_twin_automation_002, digital_twin_automation_003, digital_twin_automation_004, digital_twin_automation_005, digital_twin_automation_006, digital_twin_automation_007, digital_twin_automation_008, digital_twin_automation_009, digital_twin_automation_010, digital_twin_automation_011, digital_twin_automation_012, digital_twin_automation_013, digital_twin_automation_014, digital_twin_automation_015, digital_twin_automation_016
  ]
};
