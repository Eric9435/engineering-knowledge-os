import { ats_generator_001 } from "./micro/ats-overview";
import { ats_generator_002 } from "./micro/generator-backup";
import { ats_generator_003 } from "./micro/normal-power";
import { ats_generator_004 } from "./micro/emergency-power";
import { ats_generator_005 } from "./micro/ats-transfer-logic";
import { ats_generator_006 } from "./micro/generator-start-signal";
import { ats_generator_007 } from "./micro/load-transfer";
import { ats_generator_008 } from "./micro/return-to-normal";
import { ats_generator_009 } from "./micro/ats-alarm";
import { ats_generator_010 } from "./micro/ats-testing";

export const ats_generator = {
  id: "ats-generator",
  title: "Ats Generator",
  summary: "Building Services Electrical topic for Ats Generator, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [ats_generator_001, ats_generator_002, ats_generator_003, ats_generator_004, ats_generator_005, ats_generator_006, ats_generator_007, ats_generator_008, ats_generator_009, ats_generator_010]
};
