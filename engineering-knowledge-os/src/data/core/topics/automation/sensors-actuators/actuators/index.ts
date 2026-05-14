import { actuators_001 } from "./micro/actuator-overview";
import { actuators_002 } from "./micro/motorized-valve";
import { actuators_003 } from "./micro/damper-actuator";
import { actuators_004 } from "./micro/relay-output";
import { actuators_005 } from "./micro/contactor";
import { actuators_006 } from "./micro/solenoid-valve";
import { actuators_007 } from "./micro/vfd";
import { actuators_008 } from "./micro/soft-starter";
import { actuators_009 } from "./micro/servo-actuator";
import { actuators_010 } from "./micro/pneumatic-actuator";
import { actuators_011 } from "./micro/electric-actuator";
import { actuators_012 } from "./micro/open-close-control";
import { actuators_013 } from "./micro/modulating-control";
import { actuators_014 } from "./micro/fail-safe-position";
import { actuators_015 } from "./micro/actuator-feedback";
import { actuators_016 } from "./micro/actuator-fault";
import { actuators_017 } from "./micro/actuator-maintenance";

export const actuators = {
  id: "actuators",
  title: "Actuators",
  summary:
    "Very heavy and complex Automation knowledge architecture for Actuators, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    actuators_001, actuators_002, actuators_003, actuators_004, actuators_005, actuators_006, actuators_007, actuators_008, actuators_009, actuators_010, actuators_011, actuators_012, actuators_013, actuators_014, actuators_015, actuators_016, actuators_017
  ]
};
