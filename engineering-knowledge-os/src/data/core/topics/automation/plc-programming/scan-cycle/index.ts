import { scan_cycle_001 } from "./micro/plc-scan-cycle-overview";
import { scan_cycle_002 } from "./micro/input-scan";
import { scan_cycle_003 } from "./micro/program-execution";
import { scan_cycle_004 } from "./micro/output-update";
import { scan_cycle_005 } from "./micro/communication-scan";
import { scan_cycle_006 } from "./micro/scan-time";
import { scan_cycle_007 } from "./micro/watchdog-timer";
import { scan_cycle_008 } from "./micro/real-time-response";
import { scan_cycle_009 } from "./micro/input-filtering";
import { scan_cycle_010 } from "./micro/debounce-logic";
import { scan_cycle_011 } from "./micro/fast-input";
import { scan_cycle_012 } from "./micro/interrupt-logic";
import { scan_cycle_013 } from "./micro/cyclic-task";
import { scan_cycle_014 } from "./micro/periodic-task";
import { scan_cycle_015 } from "./micro/event-task";
import { scan_cycle_016 } from "./micro/scan-cycle-troubleshooting";

export const scan_cycle = {
  id: "scan-cycle",
  title: "Scan Cycle",
  summary:
    "Very heavy and complex Automation knowledge architecture for Scan Cycle, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    scan_cycle_001, scan_cycle_002, scan_cycle_003, scan_cycle_004, scan_cycle_005, scan_cycle_006, scan_cycle_007, scan_cycle_008, scan_cycle_009, scan_cycle_010, scan_cycle_011, scan_cycle_012, scan_cycle_013, scan_cycle_014, scan_cycle_015, scan_cycle_016
  ]
};
