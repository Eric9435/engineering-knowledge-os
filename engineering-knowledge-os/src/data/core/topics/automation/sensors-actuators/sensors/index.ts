import { sensors_001 } from "./micro/sensor-overview";
import { sensors_002 } from "./micro/temperature-sensor";
import { sensors_003 } from "./micro/pressure-sensor";
import { sensors_004 } from "./micro/flow-sensor";
import { sensors_005 } from "./micro/level-sensor";
import { sensors_006 } from "./micro/humidity-sensor";
import { sensors_007 } from "./micro/co2-sensor";
import { sensors_008 } from "./micro/differential-pressure-sensor";
import { sensors_009 } from "./micro/current-sensor";
import { sensors_010 } from "./micro/voltage-sensor";
import { sensors_011 } from "./micro/proximity-sensor";
import { sensors_012 } from "./micro/limit-switch";
import { sensors_013 } from "./micro/photoelectric-sensor";
import { sensors_014 } from "./micro/analog-signal";
import { sensors_015 } from "./micro/digital-signal";
import { sensors_016 } from "./micro/4-20ma-signal";
import { sensors_017 } from "./micro/0-10v-signal";
import { sensors_018 } from "./micro/sensor-calibration";
import { sensors_019 } from "./micro/sensor-drift";
import { sensors_020 } from "./micro/sensor-troubleshooting";

export const sensors = {
  id: "sensors",
  title: "Sensors",
  summary:
    "Very heavy and complex Automation knowledge architecture for Sensors, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    sensors_001, sensors_002, sensors_003, sensors_004, sensors_005, sensors_006, sensors_007, sensors_008, sensors_009, sensors_010, sensors_011, sensors_012, sensors_013, sensors_014, sensors_015, sensors_016, sensors_017, sensors_018, sensors_019, sensors_020
  ]
};
