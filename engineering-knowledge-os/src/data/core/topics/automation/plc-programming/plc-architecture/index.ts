import { plc_architecture_001 } from "./micro/plc-overview";
import { plc_architecture_002 } from "./micro/cpu-module";
import { plc_architecture_003 } from "./micro/power-supply-module";
import { plc_architecture_004 } from "./micro/digital-input-module";
import { plc_architecture_005 } from "./micro/digital-output-module";
import { plc_architecture_006 } from "./micro/analog-input-module";
import { plc_architecture_007 } from "./micro/analog-output-module";
import { plc_architecture_008 } from "./micro/communication-module";
import { plc_architecture_009 } from "./micro/remote-io";
import { plc_architecture_010 } from "./micro/plc-rack";
import { plc_architecture_011 } from "./micro/plc-memory";
import { plc_architecture_012 } from "./micro/program-memory";
import { plc_architecture_013 } from "./micro/data-memory";
import { plc_architecture_014 } from "./micro/retentive-memory";
import { plc_architecture_015 } from "./micro/plc-addressing";
import { plc_architecture_016 } from "./micro/plc-tags";
import { plc_architecture_017 } from "./micro/plc-runtime";
import { plc_architecture_018 } from "./micro/plc-diagnostics";
import { plc_architecture_019 } from "./micro/plc-redundancy";
import { plc_architecture_020 } from "./micro/plc-maintenance";

export const plc_architecture = {
  id: "plc-architecture",
  title: "PLC Architecture",
  summary:
    "Very heavy and complex Automation knowledge architecture for PLC Architecture, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    plc_architecture_001, plc_architecture_002, plc_architecture_003, plc_architecture_004, plc_architecture_005, plc_architecture_006, plc_architecture_007, plc_architecture_008, plc_architecture_009, plc_architecture_010, plc_architecture_011, plc_architecture_012, plc_architecture_013, plc_architecture_014, plc_architecture_015, plc_architecture_016, plc_architecture_017, plc_architecture_018, plc_architecture_019, plc_architecture_020
  ]
};
