import { ups_001 } from "./micro/ups-overview";
import { ups_002 } from "./micro/critical-load";
import { ups_003 } from "./micro/battery-backup";
import { ups_004 } from "./micro/ups-bypass";
import { ups_005 } from "./micro/ups-runtime";
import { ups_006 } from "./micro/battery-bank";
import { ups_007 } from "./micro/ups-alarm";
import { ups_008 } from "./micro/ups-maintenance";
import { ups_009 } from "./micro/ups-room-cooling";
import { ups_010 } from "./micro/ups-testing";

export const ups = {
  id: "ups",
  title: "Ups",
  summary: "Building Services Electrical topic for Ups, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [ups_001, ups_002, ups_003, ups_004, ups_005, ups_006, ups_007, ups_008, ups_009, ups_010]
};
