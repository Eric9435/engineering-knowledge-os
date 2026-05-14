import { fire_alarm_001 } from "./micro/fire-alarm-overview";
import { fire_alarm_002 } from "./micro/fire-alarm-panel";
import { fire_alarm_003 } from "./micro/addressable-system";
import { fire_alarm_004 } from "./micro/conventional-system";
import { fire_alarm_005 } from "./micro/smoke-detector";
import { fire_alarm_006 } from "./micro/heat-detector";
import { fire_alarm_007 } from "./micro/beam-detector";
import { fire_alarm_008 } from "./micro/manual-call-point";
import { fire_alarm_009 } from "./micro/alarm-bell";
import { fire_alarm_010 } from "./micro/horn-strobe";
import { fire_alarm_011 } from "./micro/fire-alarm-loop";
import { fire_alarm_012 } from "./micro/zone-logic";
import { fire_alarm_013 } from "./micro/cause-and-effect";
import { fire_alarm_014 } from "./micro/fire-alarm-monitoring";
import { fire_alarm_015 } from "./micro/false-alarm";
import { fire_alarm_016 } from "./micro/battery-backup";
import { fire_alarm_017 } from "./micro/fire-alarm-cable";
import { fire_alarm_018 } from "./micro/fire-alarm-testing";
import { fire_alarm_019 } from "./micro/fire-alarm-troubleshooting";
import { fire_alarm_020 } from "./micro/fire-alarm-maintenance";

export const fire_alarm = {
  id: "fire-alarm",
  title: "Fire Alarm",
  summary:
    "Professional Fire Protection Engineering knowledge architecture for Fire Alarm, covering life safety systems, fire detection, alarm logic, smoke control, suppression systems, troubleshooting and maintenance.",

  microTopics: [
    fire_alarm_001, fire_alarm_002, fire_alarm_003, fire_alarm_004, fire_alarm_005, fire_alarm_006, fire_alarm_007, fire_alarm_008, fire_alarm_009, fire_alarm_010, fire_alarm_011, fire_alarm_012, fire_alarm_013, fire_alarm_014, fire_alarm_015, fire_alarm_016, fire_alarm_017, fire_alarm_018, fire_alarm_019, fire_alarm_020
  ]
};
