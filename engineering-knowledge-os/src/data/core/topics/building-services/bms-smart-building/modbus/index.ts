import { modbus_001 } from "./micro/modbus-overview";
import { modbus_002 } from "./micro/modbus-rtu";
import { modbus_003 } from "./micro/modbus-tcp";
import { modbus_004 } from "./micro/master-slave-architecture";
import { modbus_005 } from "./micro/holding-register";
import { modbus_006 } from "./micro/input-register";
import { modbus_007 } from "./micro/coil-register";
import { modbus_008 } from "./micro/modbus-address";
import { modbus_009 } from "./micro/baud-rate";
import { modbus_010 } from "./micro/parity";
import { modbus_011 } from "./micro/polling";
import { modbus_012 } from "./micro/modbus-gateway";
import { modbus_013 } from "./micro/modbus-integration";
import { modbus_014 } from "./micro/modbus-mapping";
import { modbus_015 } from "./micro/communication-failure";
import { modbus_016 } from "./micro/modbus-troubleshooting";

export const modbus = {
  id: "modbus",
  title: "Modbus",
  summary:
    "Professional Smart Building and BMS Engineering knowledge architecture for Modbus, covering automation systems, protocols, analytics, monitoring, optimization and intelligent building operation.",

  microTopics: [
    modbus_001, modbus_002, modbus_003, modbus_004, modbus_005, modbus_006, modbus_007, modbus_008, modbus_009, modbus_010, modbus_011, modbus_012, modbus_013, modbus_014, modbus_015, modbus_016
  ]
};
