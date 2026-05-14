import { scada_architecture_001 } from "./micro/scada-overview";
import { scada_architecture_002 } from "./micro/scada-server";
import { scada_architecture_003 } from "./micro/scada-client";
import { scada_architecture_004 } from "./micro/engineering-workstation";
import { scada_architecture_005 } from "./micro/operator-workstation";
import { scada_architecture_006 } from "./micro/historian";
import { scada_architecture_007 } from "./micro/alarm-server";
import { scada_architecture_008 } from "./micro/communication-driver";
import { scada_architecture_009 } from "./micro/opc-server";
import { scada_architecture_010 } from "./micro/tag-database";
import { scada_architecture_011 } from "./micro/scada-network";
import { scada_architecture_012 } from "./micro/scada-redundancy";
import { scada_architecture_013 } from "./micro/scada-security";
import { scada_architecture_014 } from "./micro/scada-backup";
import { scada_architecture_015 } from "./micro/scada-deployment";
import { scada_architecture_016 } from "./micro/scada-maintenance";

export const scada_architecture = {
  id: "scada-architecture",
  title: "SCADA Architecture",
  summary:
    "Very heavy and complex Automation knowledge architecture for SCADA Architecture, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    scada_architecture_001, scada_architecture_002, scada_architecture_003, scada_architecture_004, scada_architecture_005, scada_architecture_006, scada_architecture_007, scada_architecture_008, scada_architecture_009, scada_architecture_010, scada_architecture_011, scada_architecture_012, scada_architecture_013, scada_architecture_014, scada_architecture_015, scada_architecture_016
  ]
};
