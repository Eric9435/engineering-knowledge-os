import { dry_bulb_temperature } from "./micro/dry-bulb-temperature";
import { wet_bulb_temperature } from "./micro/wet-bulb-temperature";
import { relative_humidity } from "./micro/relative-humidity";
import { dew_point } from "./micro/dew-point";
import { humidity_ratio } from "./micro/humidity-ratio";
import { specific_volume } from "./micro/specific-volume";
import { moist_air_density } from "./micro/moist-air-density";
import { enthalpy_of_moist_air } from "./micro/enthalpy-of-moist-air";
import { sensible_heating } from "./micro/sensible-heating";
import { sensible_cooling } from "./micro/sensible-cooling";
import { humidification } from "./micro/humidification";
import { dehumidification } from "./micro/dehumidification";
import { cooling_and_dehumidification } from "./micro/cooling-and-dehumidification";
import { heating_and_humidification } from "./micro/heating-and-humidification";
import { adiabatic_saturation } from "./micro/adiabatic-saturation";
import { evaporative_cooling } from "./micro/evaporative-cooling";
import { ahu_psychrometrics } from "./micro/ahu-psychrometrics";
import { cooling_coil_process } from "./micro/cooling-coil-process";
import { sensible_heat_ratio } from "./micro/sensible-heat-ratio";
import { outdoor_air_mixing } from "./micro/outdoor-air-mixing";
import { fresh_air_load } from "./micro/fresh-air-load";
import { return_air_mixing } from "./micro/return-air-mixing";
import { supply_air_condition } from "./micro/supply-air-condition";
import { human_comfort_zone } from "./micro/human-comfort-zone";
import { psychrometric_chart } from "./micro/psychrometric-chart";
import { constant_rh_lines } from "./micro/constant-rh-lines";
import { constant_wb_lines } from "./micro/constant-wb-lines";
import { constant_enthalpy_lines } from "./micro/constant-enthalpy-lines";
import { process_visualization } from "./micro/process-visualization";
import { hvac_process_plotting } from "./micro/hvac-process-plotting";
import { moist_air_energy_balance } from "./micro/moist-air-energy-balance";
import { condensation_analysis } from "./micro/condensation-analysis";
import { mold_risk } from "./micro/mold-risk";
import { iaq_and_humidity } from "./micro/iaq-and-humidity";
import { data_center_humidity_control } from "./micro/data-center-humidity-control";
import { hospital_hvac_humidity } from "./micro/hospital-hvac-humidity";
import { clean_room_moisture_control } from "./micro/clean-room-moisture-control";
import { sensor_interpretation } from "./micro/sensor-interpretation";
import { rh_sensor_error } from "./micro/rh-sensor-error";
import { coil_performance_diagnosis } from "./micro/coil-performance-diagnosis";
import { humidity_fault_diagnosis } from "./micro/humidity-fault-diagnosis";
import { hvac_optimization } from "./micro/hvac-optimization";

export const psychrometrics = {
  id: "psychrometrics",
  title: "Psychrometrics",
  summary:
    "Professional HVAC psychrometrics knowledge architecture.",

  microTopics: [
    dry_bulb_temperature,
    wet_bulb_temperature,
    relative_humidity,
    dew_point,
    humidity_ratio,
    specific_volume,
    moist_air_density,
    enthalpy_of_moist_air,
    sensible_heating,
    sensible_cooling,
    humidification,
    dehumidification,
    cooling_and_dehumidification,
    heating_and_humidification,
    adiabatic_saturation,
    evaporative_cooling,
    ahu_psychrometrics,
    cooling_coil_process,
    sensible_heat_ratio,
    outdoor_air_mixing,
    fresh_air_load,
    return_air_mixing,
    supply_air_condition,
    human_comfort_zone,
    psychrometric_chart,
    constant_rh_lines,
    constant_wb_lines,
    constant_enthalpy_lines,
    process_visualization,
    hvac_process_plotting,
    moist_air_energy_balance,
    condensation_analysis,
    mold_risk,
    iaq_and_humidity,
    data_center_humidity_control,
    hospital_hvac_humidity,
    clean_room_moisture_control,
    sensor_interpretation,
    rh_sensor_error,
    coil_performance_diagnosis,
    humidity_fault_diagnosis,
    hvac_optimization
  ]
};
