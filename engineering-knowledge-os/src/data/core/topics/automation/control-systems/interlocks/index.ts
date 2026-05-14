import { interlocks_001 } from "./micro/interlock-overview";
import { interlocks_002 } from "./micro/safety-interlock";
import { interlocks_003 } from "./micro/process-interlock";
import { interlocks_004 } from "./micro/electrical-interlock";
import { interlocks_005 } from "./micro/mechanical-interlock";
import { interlocks_006 } from "./micro/pump-interlock";
import { interlocks_007 } from "./micro/fan-interlock";
import { interlocks_008 } from "./micro/chiller-interlock";
import { interlocks_009 } from "./micro/fire-alarm-interlock";
import { interlocks_010 } from "./micro/low-level-interlock";
import { interlocks_011 } from "./micro/high-pressure-interlock";
import { interlocks_012 } from "./micro/flow-switch-interlock";
import { interlocks_013 } from "./micro/door-interlock";
import { interlocks_014 } from "./micro/emergency-stop";
import { interlocks_015 } from "./micro/trip-logic";
import { interlocks_016 } from "./micro/interlock-bypass";
import { interlocks_017 } from "./micro/interlock-testing";
import { interlocks_018 } from "./micro/interlock-troubleshooting";

export const interlocks = {
  id: "interlocks",
  title: "Interlocks",
  summary:
    "Very heavy and complex Automation knowledge architecture for Interlocks, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    interlocks_001, interlocks_002, interlocks_003, interlocks_004, interlocks_005, interlocks_006, interlocks_007, interlocks_008, interlocks_009, interlocks_010, interlocks_011, interlocks_012, interlocks_013, interlocks_014, interlocks_015, interlocks_016, interlocks_017, interlocks_018
  ]
};
