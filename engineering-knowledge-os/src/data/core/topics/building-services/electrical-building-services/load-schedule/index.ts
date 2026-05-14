import { load_schedule_001 } from "./micro/load-schedule-overview";
import { load_schedule_002 } from "./micro/connected-load";
import { load_schedule_003 } from "./micro/demand-load";
import { load_schedule_004 } from "./micro/diversity-factor";
import { load_schedule_005 } from "./micro/power-factor";
import { load_schedule_006 } from "./micro/panel-load";
import { load_schedule_007 } from "./micro/circuit-load";
import { load_schedule_008 } from "./micro/spare-capacity";
import { load_schedule_009 } from "./micro/load-balance";
import { load_schedule_010 } from "./micro/design-review";

export const load_schedule = {
  id: "load-schedule",
  title: "Load Schedule",
  summary: "Building Services Electrical topic for Load Schedule, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [load_schedule_001, load_schedule_002, load_schedule_003, load_schedule_004, load_schedule_005, load_schedule_006, load_schedule_007, load_schedule_008, load_schedule_009, load_schedule_010]
};
