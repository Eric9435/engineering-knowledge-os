import { protection_system_001 } from "./micro/protection-system-overview";
import { protection_system_002 } from "./micro/overcurrent-protection";
import { protection_system_003 } from "./micro/short-circuit-protection";
import { protection_system_004 } from "./micro/earth-fault-protection";
import { protection_system_005 } from "./micro/protection-relay";
import { protection_system_006 } from "./micro/circuit-breaker-coordination";
import { protection_system_007 } from "./micro/selective-coordination";
import { protection_system_008 } from "./micro/relay-logic";
import { protection_system_009 } from "./micro/protection-curve";
import { protection_system_010 } from "./micro/breaker-trip";
import { protection_system_011 } from "./micro/protection-zone";
import { protection_system_012 } from "./micro/arc-flash-protection";
import { protection_system_013 } from "./micro/protection-monitoring";
import { protection_system_014 } from "./micro/relay-testing";
import { protection_system_015 } from "./micro/protection-troubleshooting";
import { protection_system_016 } from "./micro/protection-maintenance";

export const protection_system = {
  id: "protection-system",
  title: "Protection System",
  summary:
    "Professional Electrical Engineering knowledge architecture for Protection System, covering power systems, protection, monitoring, testing, troubleshooting and operational engineering.",

  microTopics: [
    protection_system_001, protection_system_002, protection_system_003, protection_system_004, protection_system_005, protection_system_006, protection_system_007, protection_system_008, protection_system_009, protection_system_010, protection_system_011, protection_system_012, protection_system_013, protection_system_014, protection_system_015, protection_system_016
  ]
};
