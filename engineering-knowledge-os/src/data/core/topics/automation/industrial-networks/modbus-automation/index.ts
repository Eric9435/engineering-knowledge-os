import { modbus_automation_001 } from "./micro/modbus-overview";
import { modbus_automation_002 } from "./micro/modbus-rtu";
import { modbus_automation_003 } from "./micro/modbus-tcp";
import { modbus_automation_004 } from "./micro/master-slave-model";
import { modbus_automation_005 } from "./micro/client-server-model";
import { modbus_automation_006 } from "./micro/holding-register";
import { modbus_automation_007 } from "./micro/input-register";
import { modbus_automation_008 } from "./micro/coil";
import { modbus_automation_009 } from "./micro/discrete-input";
import { modbus_automation_010 } from "./micro/function-code";
import { modbus_automation_011 } from "./micro/slave-id";
import { modbus_automation_012 } from "./micro/register-mapping";
import { modbus_automation_013 } from "./micro/polling-rate";
import { modbus_automation_014 } from "./micro/timeout";
import { modbus_automation_015 } from "./micro/crc-error";
import { modbus_automation_016 } from "./micro/gateway";
import { modbus_automation_017 } from "./micro/rs485-wiring";
import { modbus_automation_018 } from "./micro/modbus-troubleshooting";

export const modbus_automation = {
  id: "modbus-automation",
  title: "Modbus Automation",
  summary:
    "Very heavy and complex Automation knowledge architecture for Modbus Automation, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    modbus_automation_001, modbus_automation_002, modbus_automation_003, modbus_automation_004, modbus_automation_005, modbus_automation_006, modbus_automation_007, modbus_automation_008, modbus_automation_009, modbus_automation_010, modbus_automation_011, modbus_automation_012, modbus_automation_013, modbus_automation_014, modbus_automation_015, modbus_automation_016, modbus_automation_017, modbus_automation_018
  ]
};
