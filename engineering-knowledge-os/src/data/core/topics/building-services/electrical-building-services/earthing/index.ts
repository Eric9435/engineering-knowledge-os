import { earthing_001 } from "./micro/earthing-overview";
import { earthing_002 } from "./micro/earth-electrode";
import { earthing_003 } from "./micro/earth-resistance";
import { earthing_004 } from "./micro/equipotential-bonding";
import { earthing_005 } from "./micro/lightning-protection";
import { earthing_006 } from "./micro/spd";
import { earthing_007 } from "./micro/earth-fault";
import { earthing_008 } from "./micro/grounding-test";
import { earthing_009 } from "./micro/touch-voltage";
import { earthing_010 } from "./micro/earthing-maintenance";

export const earthing = {
  id: "earthing",
  title: "Earthing",
  summary: "Building Services Electrical topic for Earthing, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [earthing_001, earthing_002, earthing_003, earthing_004, earthing_005, earthing_006, earthing_007, earthing_008, earthing_009, earthing_010]
};
