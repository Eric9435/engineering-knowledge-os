import { instrumentation_001 } from "./micro/instrumentation-overview";
import { instrumentation_002 } from "./micro/signal-wiring";
import { instrumentation_003 } from "./micro/shielded-cable";
import { instrumentation_004 } from "./micro/grounding";
import { instrumentation_005 } from "./micro/signal-noise";
import { instrumentation_006 } from "./micro/transmitter";
import { instrumentation_007 } from "./micro/transducer";
import { instrumentation_008 } from "./micro/scaling";
import { instrumentation_009 } from "./micro/engineering-units";
import { instrumentation_010 } from "./micro/calibration";
import { instrumentation_011 } from "./micro/loop-check";
import { instrumentation_012 } from "./micro/point-to-point-test";
import { instrumentation_013 } from "./micro/i-o-checkout";
import { instrumentation_014 } from "./micro/commissioning-sheet";
import { instrumentation_015 } from "./micro/instrument-index";
import { instrumentation_016 } from "./micro/instrument-troubleshooting";

export const instrumentation = {
  id: "instrumentation",
  title: "Instrumentation",
  summary:
    "Very heavy and complex Automation knowledge architecture for Instrumentation, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    instrumentation_001, instrumentation_002, instrumentation_003, instrumentation_004, instrumentation_005, instrumentation_006, instrumentation_007, instrumentation_008, instrumentation_009, instrumentation_010, instrumentation_011, instrumentation_012, instrumentation_013, instrumentation_014, instrumentation_015, instrumentation_016
  ]
};
