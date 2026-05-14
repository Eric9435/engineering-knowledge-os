import { bacnet_automation_001 } from "./micro/bacnet-overview";
import { bacnet_automation_002 } from "./micro/bacnet-ip";
import { bacnet_automation_003 } from "./micro/bacnet-mstp";
import { bacnet_automation_004 } from "./micro/bacnet-object";
import { bacnet_automation_005 } from "./micro/bacnet-device";
import { bacnet_automation_006 } from "./micro/analog-input-object";
import { bacnet_automation_007 } from "./micro/analog-output-object";
import { bacnet_automation_008 } from "./micro/binary-input-object";
import { bacnet_automation_009 } from "./micro/binary-output-object";
import { bacnet_automation_010 } from "./micro/device-instance";
import { bacnet_automation_011 } from "./micro/bacnet-priority-array";
import { bacnet_automation_012 } from "./micro/cov";
import { bacnet_automation_013 } from "./micro/bacnet-schedule";
import { bacnet_automation_014 } from "./micro/bacnet-trend-log";
import { bacnet_automation_015 } from "./micro/bacnet-alarm";
import { bacnet_automation_016 } from "./micro/bacnet-router";
import { bacnet_automation_017 } from "./micro/bacnet-integration";
import { bacnet_automation_018 } from "./micro/bacnet-troubleshooting";

export const bacnet_automation = {
  id: "bacnet-automation",
  title: "BACnet Automation",
  summary:
    "Very heavy and complex Automation knowledge architecture for BACnet Automation, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    bacnet_automation_001, bacnet_automation_002, bacnet_automation_003, bacnet_automation_004, bacnet_automation_005, bacnet_automation_006, bacnet_automation_007, bacnet_automation_008, bacnet_automation_009, bacnet_automation_010, bacnet_automation_011, bacnet_automation_012, bacnet_automation_013, bacnet_automation_014, bacnet_automation_015, bacnet_automation_016, bacnet_automation_017, bacnet_automation_018
  ]
};
