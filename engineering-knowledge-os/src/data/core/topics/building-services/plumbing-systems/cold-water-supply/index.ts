import { cold_water_supply_001 } from "./micro/cold-water-supply-overview";
import { cold_water_supply_002 } from "./micro/incoming-water-main";
import { cold_water_supply_003 } from "./micro/water-meter";
import { cold_water_supply_004 } from "./micro/underground-tank";
import { cold_water_supply_005 } from "./micro/roof-tank";
import { cold_water_supply_006 } from "./micro/transfer-pump";
import { cold_water_supply_007 } from "./micro/booster-pump";
import { cold_water_supply_008 } from "./micro/gravity-supply";
import { cold_water_supply_009 } from "./micro/pressurized-supply";
import { cold_water_supply_010 } from "./micro/pressure-reducing-valve";
import { cold_water_supply_011 } from "./micro/pipe-routing";
import { cold_water_supply_012 } from "./micro/fixture-supply";
import { cold_water_supply_013 } from "./micro/water-demand";
import { cold_water_supply_014 } from "./micro/flow-rate";
import { cold_water_supply_015 } from "./micro/pressure-loss";
import { cold_water_supply_016 } from "./micro/residual-pressure";
import { cold_water_supply_017 } from "./micro/water-quality";
import { cold_water_supply_018 } from "./micro/cold-water-troubleshooting";

export const cold_water_supply = {
  id: "cold-water-supply",
  title: "Cold Water Supply",
  summary:
    "Professional plumbing knowledge architecture for Cold Water Supply, covering system design, hydraulic meaning, pipe network, equipment, valves, troubleshooting, maintenance and building services application.",
  microTopics: [
    cold_water_supply_001, cold_water_supply_002, cold_water_supply_003, cold_water_supply_004, cold_water_supply_005, cold_water_supply_006, cold_water_supply_007, cold_water_supply_008, cold_water_supply_009, cold_water_supply_010, cold_water_supply_011, cold_water_supply_012, cold_water_supply_013, cold_water_supply_014, cold_water_supply_015, cold_water_supply_016, cold_water_supply_017, cold_water_supply_018
  ]
};
