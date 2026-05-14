import { emergency_power_001 } from "./micro/emergency-power-overview";
import { emergency_power_002 } from "./micro/life-safety-load";
import { emergency_power_003 } from "./micro/fire-pump-power";
import { emergency_power_004 } from "./micro/emergency-lighting-power";
import { emergency_power_005 } from "./micro/smoke-control-power";
import { emergency_power_006 } from "./micro/lift-recall-power";
import { emergency_power_007 } from "./micro/generator-essential-load";
import { emergency_power_008 } from "./micro/ups-essential-load";
import { emergency_power_009 } from "./micro/power-priority";
import { emergency_power_010 } from "./micro/emergency-testing";

export const emergency_power = {
  id: "emergency-power",
  title: "Emergency Power",
  summary: "Building Services Electrical topic for Emergency Power, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [emergency_power_001, emergency_power_002, emergency_power_003, emergency_power_004, emergency_power_005, emergency_power_006, emergency_power_007, emergency_power_008, emergency_power_009, emergency_power_010]
};
