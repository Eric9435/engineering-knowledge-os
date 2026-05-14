import { hvac_integration_001 } from "./micro/hvac-bms-integration";
import { hvac_integration_002 } from "./micro/ahu-integration";
import { hvac_integration_003 } from "./micro/fcu-integration";
import { hvac_integration_004 } from "./micro/vav-integration";
import { hvac_integration_005 } from "./micro/chiller-integration";
import { hvac_integration_006 } from "./micro/cooling-tower-integration";
import { hvac_integration_007 } from "./micro/pump-integration";
import { hvac_integration_008 } from "./micro/temperature-monitoring";
import { hvac_integration_009 } from "./micro/humidity-monitoring";
import { hvac_integration_010 } from "./micro/pressure-monitoring";
import { hvac_integration_011 } from "./micro/valve-control";
import { hvac_integration_012 } from "./micro/damper-control";
import { hvac_integration_013 } from "./micro/fan-control";
import { hvac_integration_014 } from "./micro/schedule-control";
import { hvac_integration_015 } from "./micro/hvac-alarm";
import { hvac_integration_016 } from "./micro/hvac-optimization";

export const hvac_integration = {
  id: "hvac-integration",
  title: "HVAC Integration",
  summary:
    "Professional Smart Building and BMS Engineering knowledge architecture for HVAC Integration, covering automation systems, protocols, analytics, monitoring, optimization and intelligent building operation.",

  microTopics: [
    hvac_integration_001, hvac_integration_002, hvac_integration_003, hvac_integration_004, hvac_integration_005, hvac_integration_006, hvac_integration_007, hvac_integration_008, hvac_integration_009, hvac_integration_010, hvac_integration_011, hvac_integration_012, hvac_integration_013, hvac_integration_014, hvac_integration_015, hvac_integration_016
  ]
};
