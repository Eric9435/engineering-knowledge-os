import { ups_system_001 } from "./micro/ups-overview";
import { ups_system_002 } from "./micro/online-ups";
import { ups_system_003 } from "./micro/offline-ups";
import { ups_system_004 } from "./micro/battery-bank";
import { ups_system_005 } from "./micro/battery-charger";
import { ups_system_006 } from "./micro/inverter-system";
import { ups_system_007 } from "./micro/static-bypass";
import { ups_system_008 } from "./micro/ups-redundancy";
import { ups_system_009 } from "./micro/critical-load";
import { ups_system_010 } from "./micro/backup-time";
import { ups_system_011 } from "./micro/battery-monitoring";
import { ups_system_012 } from "./micro/ups-alarm";
import { ups_system_013 } from "./micro/ups-efficiency";
import { ups_system_014 } from "./micro/ups-cooling";
import { ups_system_015 } from "./micro/ups-testing";
import { ups_system_016 } from "./micro/ups-maintenance";

export const ups_system = {
  id: "ups-system",
  title: "UPS System",
  summary:
    "Professional Electrical Engineering knowledge architecture for UPS System, covering power systems, protection, monitoring, testing, troubleshooting and operational engineering.",

  microTopics: [
    ups_system_001, ups_system_002, ups_system_003, ups_system_004, ups_system_005, ups_system_006, ups_system_007, ups_system_008, ups_system_009, ups_system_010, ups_system_011, ups_system_012, ups_system_013, ups_system_014, ups_system_015, ups_system_016
  ]
};
