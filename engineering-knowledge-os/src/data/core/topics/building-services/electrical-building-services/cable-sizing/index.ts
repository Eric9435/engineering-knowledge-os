import { cable_sizing_001 } from "./micro/cable-sizing-overview";
import { cable_sizing_002 } from "./micro/load-current";
import { cable_sizing_003 } from "./micro/voltage-drop";
import { cable_sizing_004 } from "./micro/current-carrying-capacity";
import { cable_sizing_005 } from "./micro/cable-tray";
import { cable_sizing_006 } from "./micro/cable-derating";
import { cable_sizing_007 } from "./micro/cable-termination";
import { cable_sizing_008 } from "./micro/fire-rated-cable";
import { cable_sizing_009 } from "./micro/cable-testing";
import { cable_sizing_010 } from "./micro/cable-fault";

export const cable_sizing = {
  id: "cable-sizing",
  title: "Cable Sizing",
  summary: "Building Services Electrical topic for Cable Sizing, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [cable_sizing_001, cable_sizing_002, cable_sizing_003, cable_sizing_004, cable_sizing_005, cable_sizing_006, cable_sizing_007, cable_sizing_008, cable_sizing_009, cable_sizing_010]
};
