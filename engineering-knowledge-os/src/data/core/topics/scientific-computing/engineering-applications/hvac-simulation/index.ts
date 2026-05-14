import { hvac_simulation_001 } from "./micro/hvac-simulation-overview";
import { hvac_simulation_002 } from "./micro/room-thermal-model";
import { hvac_simulation_003 } from "./micro/cooling-load-simulation";
import { hvac_simulation_004 } from "./micro/chiller-cop-simulation";
import { hvac_simulation_005 } from "./micro/pump-energy-simulation";
import { hvac_simulation_006 } from "./micro/ahu-coil-simulation";
import { hvac_simulation_007 } from "./micro/thermostat-control-simulation";
import { hvac_simulation_008 } from "./micro/occupancy-load-simulation";
import { hvac_simulation_009 } from "./micro/weather-input";
import { hvac_simulation_010 } from "./micro/energy-consumption-model";
import { hvac_simulation_011 } from "./micro/fault-scenario-simulation";
import { hvac_simulation_012 } from "./micro/optimization-scenario";
import { hvac_simulation_013 } from "./micro/engineering-dashboard-output";

export const hvac_simulation = {
  id: "hvac-simulation",
  title: "HVAC Simulation",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for HVAC Simulation, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    hvac_simulation_001, hvac_simulation_002, hvac_simulation_003, hvac_simulation_004, hvac_simulation_005, hvac_simulation_006, hvac_simulation_007, hvac_simulation_008, hvac_simulation_009, hvac_simulation_010, hvac_simulation_011, hvac_simulation_012, hvac_simulation_013
  ]
};
