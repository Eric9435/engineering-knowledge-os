import { lighting_001 } from "./micro/lighting-overview";
import { lighting_002 } from "./micro/lighting-circuit";
import { lighting_003 } from "./micro/lux-level";
import { lighting_004 } from "./micro/emergency-lighting";
import { lighting_005 } from "./micro/exit-sign";
import { lighting_006 } from "./micro/lighting-control";
import { lighting_007 } from "./micro/motion-sensor";
import { lighting_008 } from "./micro/daylight-control";
import { lighting_009 } from "./micro/lighting-panel";
import { lighting_010 } from "./micro/lighting-maintenance";

export const lighting = {
  id: "lighting",
  title: "Lighting",
  summary: "Building Services Electrical topic for Lighting, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [lighting_001, lighting_002, lighting_003, lighting_004, lighting_005, lighting_006, lighting_007, lighting_008, lighting_009, lighting_010]
};
