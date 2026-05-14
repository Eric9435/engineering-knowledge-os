import { fire_suppression_001 } from "./micro/fire-suppression-overview";
import { fire_suppression_002 } from "./micro/fm200-system";
import { fire_suppression_003 } from "./micro/novec-1230";
import { fire_suppression_004 } from "./micro/co2-suppression";
import { fire_suppression_005 } from "./micro/clean-agent-system";
import { fire_suppression_006 } from "./micro/gas-cylinder";
import { fire_suppression_007 } from "./micro/discharge-nozzle";
import { fire_suppression_008 } from "./micro/suppression-zone";
import { fire_suppression_009 } from "./micro/release-panel";
import { fire_suppression_010 } from "./micro/abort-switch";
import { fire_suppression_011 } from "./micro/pre-discharge-alarm";
import { fire_suppression_012 } from "./micro/gas-release-logic";
import { fire_suppression_013 } from "./micro/room-integrity";
import { fire_suppression_014 } from "./micro/suppression-pipe";
import { fire_suppression_015 } from "./micro/suppression-testing";
import { fire_suppression_016 } from "./micro/suppression-maintenance";

export const fire_suppression = {
  id: "fire-suppression",
  title: "Fire Suppression",
  summary:
    "Professional Fire Protection Engineering knowledge architecture for Fire Suppression, covering life safety systems, fire detection, alarm logic, smoke control, suppression systems, troubleshooting and maintenance.",

  microTopics: [
    fire_suppression_001, fire_suppression_002, fire_suppression_003, fire_suppression_004, fire_suppression_005, fire_suppression_006, fire_suppression_007, fire_suppression_008, fire_suppression_009, fire_suppression_010, fire_suppression_011, fire_suppression_012, fire_suppression_013, fire_suppression_014, fire_suppression_015, fire_suppression_016
  ]
};
