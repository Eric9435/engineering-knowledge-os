import { low_voltage_distribution_001 } from "./micro/lv-distribution-overview";
import { low_voltage_distribution_002 } from "./micro/main-lv-panel";
import { low_voltage_distribution_003 } from "./micro/sub-main-panel";
import { low_voltage_distribution_004 } from "./micro/final-circuit";
import { low_voltage_distribution_005 } from "./micro/breaker-coordination";
import { low_voltage_distribution_006 } from "./micro/cable-route";
import { low_voltage_distribution_007 } from "./micro/electrical-riser";
import { low_voltage_distribution_008 } from "./micro/metering";
import { low_voltage_distribution_009 } from "./micro/power-monitoring";
import { low_voltage_distribution_010 } from "./micro/lv-troubleshooting";

export const low_voltage_distribution = {
  id: "low-voltage-distribution",
  title: "Low Voltage Distribution",
  summary: "Building Services Electrical topic for Low Voltage Distribution, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [low_voltage_distribution_001, low_voltage_distribution_002, low_voltage_distribution_003, low_voltage_distribution_004, low_voltage_distribution_005, low_voltage_distribution_006, low_voltage_distribution_007, low_voltage_distribution_008, low_voltage_distribution_009, low_voltage_distribution_010]
};
