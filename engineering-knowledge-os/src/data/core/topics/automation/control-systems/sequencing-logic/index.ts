import { sequencing_logic_001 } from "./micro/sequencing-overview";
import { sequencing_logic_002 } from "./micro/start-sequence";
import { sequencing_logic_003 } from "./micro/stop-sequence";
import { sequencing_logic_004 } from "./micro/step-logic";
import { sequencing_logic_005 } from "./micro/state-machine";
import { sequencing_logic_006 } from "./micro/chiller-sequencing";
import { sequencing_logic_007 } from "./micro/pump-sequencing";
import { sequencing_logic_008 } from "./micro/fan-sequencing";
import { sequencing_logic_009 } from "./micro/lead-lag";
import { sequencing_logic_010 } from "./micro/duty-standby";
import { sequencing_logic_011 } from "./micro/rotation-logic";
import { sequencing_logic_012 } from "./micro/time-delay";
import { sequencing_logic_013 } from "./micro/permissive-logic";
import { sequencing_logic_014 } from "./micro/auto-mode";
import { sequencing_logic_015 } from "./micro/manual-mode";
import { sequencing_logic_016 } from "./micro/sequence-fault";
import { sequencing_logic_017 } from "./micro/sequence-testing";

export const sequencing_logic = {
  id: "sequencing-logic",
  title: "Sequencing Logic",
  summary:
    "Very heavy and complex Automation knowledge architecture for Sequencing Logic, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    sequencing_logic_001, sequencing_logic_002, sequencing_logic_003, sequencing_logic_004, sequencing_logic_005, sequencing_logic_006, sequencing_logic_007, sequencing_logic_008, sequencing_logic_009, sequencing_logic_010, sequencing_logic_011, sequencing_logic_012, sequencing_logic_013, sequencing_logic_014, sequencing_logic_015, sequencing_logic_016, sequencing_logic_017
  ]
};
