import { power_quality_001 } from "./micro/power-quality-overview";
import { power_quality_002 } from "./micro/voltage-drop";
import { power_quality_003 } from "./micro/voltage-sag";
import { power_quality_004 } from "./micro/voltage-swell";
import { power_quality_005 } from "./micro/harmonics";
import { power_quality_006 } from "./micro/thd-analysis";
import { power_quality_007 } from "./micro/power-factor";
import { power_quality_008 } from "./micro/reactive-power";
import { power_quality_009 } from "./micro/power-disturbance";
import { power_quality_010 } from "./micro/frequency-stability";
import { power_quality_011 } from "./micro/transient-voltage";
import { power_quality_012 } from "./micro/electrical-noise";
import { power_quality_013 } from "./micro/power-monitoring";
import { power_quality_014 } from "./micro/power-analytics";
import { power_quality_015 } from "./micro/power-quality-troubleshooting";
import { power_quality_016 } from "./micro/power-quality-optimization";

export const power_quality = {
  id: "power-quality",
  title: "Power Quality",
  summary:
    "Professional Electrical Engineering knowledge architecture for Power Quality, covering power systems, protection, monitoring, testing, troubleshooting and operational engineering.",

  microTopics: [
    power_quality_001, power_quality_002, power_quality_003, power_quality_004, power_quality_005, power_quality_006, power_quality_007, power_quality_008, power_quality_009, power_quality_010, power_quality_011, power_quality_012, power_quality_013, power_quality_014, power_quality_015, power_quality_016
  ]
};
