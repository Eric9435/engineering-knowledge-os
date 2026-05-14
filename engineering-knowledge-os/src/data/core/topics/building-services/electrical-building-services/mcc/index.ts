import { mcc_001 } from "./micro/mcc-overview";
import { mcc_002 } from "./micro/motor-starter";
import { mcc_003 } from "./micro/vfd-panel";
import { mcc_004 } from "./micro/pump-motor-control";
import { mcc_005 } from "./micro/fan-motor-control";
import { mcc_006 } from "./micro/interlock";
import { mcc_007 } from "./micro/overload-protection";
import { mcc_008 } from "./micro/control-wiring";
import { mcc_009 } from "./micro/mcc-alarm";
import { mcc_010 } from "./micro/mcc-maintenance";

export const mcc = {
  id: "mcc",
  title: "Mcc",
  summary: "Building Services Electrical topic for Mcc, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [mcc_001, mcc_002, mcc_003, mcc_004, mcc_005, mcc_006, mcc_007, mcc_008, mcc_009, mcc_010]
};
