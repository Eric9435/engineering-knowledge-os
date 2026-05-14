import { power_distribution_001 } from "./micro/power-distribution-overview";
import { power_distribution_002 } from "./micro/incoming-power";
import { power_distribution_003 } from "./micro/hv-switchgear";
import { power_distribution_004 } from "./micro/lv-switchboard";
import { power_distribution_005 } from "./micro/main-distribution-board";
import { power_distribution_006 } from "./micro/sub-distribution-board";
import { power_distribution_007 } from "./micro/busbar-system";
import { power_distribution_008 } from "./micro/circuit-breaker";
import { power_distribution_009 } from "./micro/electrical-load";
import { power_distribution_010 } from "./micro/demand-factor";
import { power_distribution_011 } from "./micro/diversity-factor";
import { power_distribution_012 } from "./micro/load-balancing";
import { power_distribution_013 } from "./micro/single-line-diagram";
import { power_distribution_014 } from "./micro/electrical-coordination";
import { power_distribution_015 } from "./micro/distribution-monitoring";
import { power_distribution_016 } from "./micro/power-distribution-troubleshooting";

export const power_distribution = {
  id: "power-distribution",
  title: "Power Distribution",
  summary:
    "Professional Electrical Engineering knowledge architecture for Power Distribution, covering power systems, protection, monitoring, testing, troubleshooting and operational engineering.",

  microTopics: [
    power_distribution_001, power_distribution_002, power_distribution_003, power_distribution_004, power_distribution_005, power_distribution_006, power_distribution_007, power_distribution_008, power_distribution_009, power_distribution_010, power_distribution_011, power_distribution_012, power_distribution_013, power_distribution_014, power_distribution_015, power_distribution_016
  ]
};
