import { motor_control_center_001 } from "./micro/mcc-overview";
import { motor_control_center_002 } from "./micro/motor-starter";
import { motor_control_center_003 } from "./micro/direct-on-line-starter";
import { motor_control_center_004 } from "./micro/star-delta-starter";
import { motor_control_center_005 } from "./micro/variable-frequency-drive";
import { motor_control_center_006 } from "./micro/soft-starter";
import { motor_control_center_007 } from "./micro/motor-protection";
import { motor_control_center_008 } from "./micro/motor-overload";
import { motor_control_center_009 } from "./micro/motor-control-logic";
import { motor_control_center_010 } from "./micro/motor-interlock";
import { motor_control_center_011 } from "./micro/motor-panel";
import { motor_control_center_012 } from "./micro/motor-monitoring";
import { motor_control_center_013 } from "./micro/motor-alarm";
import { motor_control_center_014 } from "./micro/motor-failure";
import { motor_control_center_015 } from "./micro/motor-troubleshooting";
import { motor_control_center_016 } from "./micro/motor-maintenance";

export const motor_control_center = {
  id: "motor-control-center",
  title: "Motor Control Center",
  summary:
    "Professional Electrical Engineering knowledge architecture for Motor Control Center, covering power systems, protection, monitoring, testing, troubleshooting and operational engineering.",

  microTopics: [
    motor_control_center_001, motor_control_center_002, motor_control_center_003, motor_control_center_004, motor_control_center_005, motor_control_center_006, motor_control_center_007, motor_control_center_008, motor_control_center_009, motor_control_center_010, motor_control_center_011, motor_control_center_012, motor_control_center_013, motor_control_center_014, motor_control_center_015, motor_control_center_016
  ]
};
