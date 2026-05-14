import { ladder_logic_001 } from "./micro/ladder-logic-overview";
import { ladder_logic_002 } from "./micro/normally-open-contact";
import { ladder_logic_003 } from "./micro/normally-closed-contact";
import { ladder_logic_004 } from "./micro/output-coil";
import { ladder_logic_005 } from "./micro/seal-in-circuit";
import { ladder_logic_006 } from "./micro/start-stop-circuit";
import { ladder_logic_007 } from "./micro/timer-on-delay";
import { ladder_logic_008 } from "./micro/timer-off-delay";
import { ladder_logic_009 } from "./micro/counter-up";
import { ladder_logic_010 } from "./micro/counter-down";
import { ladder_logic_011 } from "./micro/compare-instruction";
import { ladder_logic_012 } from "./micro/move-instruction";
import { ladder_logic_013 } from "./micro/math-instruction";
import { ladder_logic_014 } from "./micro/set-reset-logic";
import { ladder_logic_015 } from "./micro/latch-unlatch";
import { ladder_logic_016 } from "./micro/motor-control-ladder";
import { ladder_logic_017 } from "./micro/pump-control-ladder";
import { ladder_logic_018 } from "./micro/fan-control-ladder";
import { ladder_logic_019 } from "./micro/alarm-ladder";
import { ladder_logic_020 } from "./micro/troubleshooting-ladder-logic";

export const ladder_logic = {
  id: "ladder-logic",
  title: "Ladder Logic",
  summary:
    "Very heavy and complex Automation knowledge architecture for Ladder Logic, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    ladder_logic_001, ladder_logic_002, ladder_logic_003, ladder_logic_004, ladder_logic_005, ladder_logic_006, ladder_logic_007, ladder_logic_008, ladder_logic_009, ladder_logic_010, ladder_logic_011, ladder_logic_012, ladder_logic_013, ladder_logic_014, ladder_logic_015, ladder_logic_016, ladder_logic_017, ladder_logic_018, ladder_logic_019, ladder_logic_020
  ]
};
