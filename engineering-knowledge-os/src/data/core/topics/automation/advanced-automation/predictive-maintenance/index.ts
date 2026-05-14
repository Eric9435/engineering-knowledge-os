import { predictive_maintenance_001 } from "./micro/predictive-maintenance-overview";
import { predictive_maintenance_002 } from "./micro/condition-monitoring";
import { predictive_maintenance_003 } from "./micro/vibration-monitoring";
import { predictive_maintenance_004 } from "./micro/temperature-monitoring";
import { predictive_maintenance_005 } from "./micro/current-signature-analysis";
import { predictive_maintenance_006 } from "./micro/trend-degradation";
import { predictive_maintenance_007 } from "./micro/fault-pattern";
import { predictive_maintenance_008 } from "./micro/remaining-useful-life";
import { predictive_maintenance_009 } from "./micro/maintenance-alert";
import { predictive_maintenance_010 } from "./micro/anomaly-detection";
import { predictive_maintenance_011 } from "./micro/failure-prediction";
import { predictive_maintenance_012 } from "./micro/pump-prediction";
import { predictive_maintenance_013 } from "./micro/fan-prediction";
import { predictive_maintenance_014 } from "./micro/motor-prediction";
import { predictive_maintenance_015 } from "./micro/chiller-prediction";
import { predictive_maintenance_016 } from "./micro/maintenance-optimization";

export const predictive_maintenance = {
  id: "predictive-maintenance",
  title: "Predictive Maintenance",
  summary:
    "Very heavy and complex Automation knowledge architecture for Predictive Maintenance, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    predictive_maintenance_001, predictive_maintenance_002, predictive_maintenance_003, predictive_maintenance_004, predictive_maintenance_005, predictive_maintenance_006, predictive_maintenance_007, predictive_maintenance_008, predictive_maintenance_009, predictive_maintenance_010, predictive_maintenance_011, predictive_maintenance_012, predictive_maintenance_013, predictive_maintenance_014, predictive_maintenance_015, predictive_maintenance_016
  ]
};
