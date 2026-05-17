import { power_systems_nerc } from "./nerc";
import { power_systems_ieee_smart_grid } from "./ieee-smart-grid";
import { power_systems_iec_hvdc } from "./iec-hvdc";
import { power_systems_iec_substation_standards } from "./iec-substation-standards";
import { power_systems_iec_renewable_standards } from "./iec-renewable-standards";
import { power_systems_iec_61850 } from "./iec-61850";

export const power_systems_codes = [
  power_systems_nerc, power_systems_ieee_smart_grid, power_systems_iec_hvdc, power_systems_iec_substation_standards, power_systems_iec_renewable_standards, power_systems_iec_61850
];
