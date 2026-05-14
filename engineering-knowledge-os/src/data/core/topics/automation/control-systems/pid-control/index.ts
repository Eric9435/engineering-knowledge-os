import { pid_control_001 } from "./micro/pid-overview";
import { pid_control_002 } from "./micro/process-variable";
import { pid_control_003 } from "./micro/setpoint";
import { pid_control_004 } from "./micro/control-error";
import { pid_control_005 } from "./micro/proportional-control";
import { pid_control_006 } from "./micro/integral-control";
import { pid_control_007 } from "./micro/derivative-control";
import { pid_control_008 } from "./micro/pid-output";
import { pid_control_009 } from "./micro/tuning";
import { pid_control_010 } from "./micro/overshoot";
import { pid_control_011 } from "./micro/settling-time";
import { pid_control_012 } from "./micro/steady-state-error";
import { pid_control_013 } from "./micro/control-loop";
import { pid_control_014 } from "./micro/open-loop";
import { pid_control_015 } from "./micro/closed-loop";
import { pid_control_016 } from "./micro/hvac-pid";
import { pid_control_017 } from "./micro/pump-pid";
import { pid_control_018 } from "./micro/valve-pid";
import { pid_control_019 } from "./micro/pid-troubleshooting";

export const pid_control = {
  id: "pid-control",
  title: "PID Control",
  summary:
    "Very heavy and complex Automation knowledge architecture for PID Control, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    pid_control_001, pid_control_002, pid_control_003, pid_control_004, pid_control_005, pid_control_006, pid_control_007, pid_control_008, pid_control_009, pid_control_010, pid_control_011, pid_control_012, pid_control_013, pid_control_014, pid_control_015, pid_control_016, pid_control_017, pid_control_018, pid_control_019
  ]
};
