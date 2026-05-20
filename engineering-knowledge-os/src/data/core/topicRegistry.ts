import * as chemistry_foundations_of_chemistry from "@/data/core/topics/chemistry/foundations-of-chemistry";
import * as chemistry_general_chemistry from "@/data/core/topics/chemistry/general-chemistry";
import * as chemistry_inorganic_chemistry from "@/data/core/topics/chemistry/inorganic-chemistry";
import * as chemistry_organic_chemistry from "@/data/core/topics/chemistry/organic-chemistry";
import * as chemistry_physical_chemistry from "@/data/core/topics/chemistry/physical-chemistry";
import * as chemistry_analytical_chemistry from "@/data/core/topics/chemistry/analytical-chemistry";
import * as chemistry_biochemistry from "@/data/core/topics/chemistry/biochemistry";
import * as chemistry_materials_chemistry from "@/data/core/topics/chemistry/materials-chemistry";
import * as chemistry_environmental_chemistry from "@/data/core/topics/chemistry/environmental-chemistry";
import * as chemistry_industrial_engineering_chemistry from "@/data/core/topics/chemistry/industrial-engineering-chemistry";
import * as chemistry_electrochemistry from "@/data/core/topics/chemistry/electrochemistry";
import * as chemistry_nuclear_chemistry from "@/data/core/topics/chemistry/nuclear-chemistry";
import * as chemistry_computational_ai_chemistry from "@/data/core/topics/chemistry/computational-ai-chemistry";
import * as chemistry_frontier_chemistry from "@/data/core/topics/chemistry/frontier-chemistry";
import * as chemistry_chemistry_database_layer from "@/data/core/topics/chemistry/chemistry-database-layer";

import * as physics_foundations_of_physics from "@/data/core/topics/physics/foundations-of-physics";
import * as physics_mathematical_physics from "@/data/core/topics/physics/mathematical-physics";
import * as physics_classical_mechanics from "@/data/core/topics/physics/classical-mechanics";
import * as physics_gravitation from "@/data/core/topics/physics/gravitation";
import * as physics_fluid_mechanics from "@/data/core/topics/physics/fluid-mechanics";
import * as physics_thermodynamics from "@/data/core/topics/physics/thermodynamics";
import * as physics_waves_oscillations_acoustics from "@/data/core/topics/physics/waves-oscillations-acoustics";
import * as physics_electricity_magnetism from "@/data/core/topics/physics/electricity-magnetism";
import * as physics_optics from "@/data/core/topics/physics/optics";
import * as physics_relativity from "@/data/core/topics/physics/relativity";
import * as physics_quantum_physics from "@/data/core/topics/physics/quantum-physics";
import * as physics_atomic_nuclear_particle from "@/data/core/topics/physics/atomic-nuclear-particle";
import * as physics_condensed_plasma_astrophysics from "@/data/core/topics/physics/condensed-plasma-astrophysics";
import * as physics_computational_biophysics_frontier from "@/data/core/topics/physics/computational-biophysics-frontier";
import * as physics_experiments_constants_equations_unsolved from "@/data/core/topics/physics/experiments-constants-equations-unsolved";

import { predictive_maintenance } from "./topics/automation/advanced-automation/predictive-maintenance";
import { digital_twin_automation } from "./topics/automation/advanced-automation/digital-twin-automation";
import { industrial_iot } from "./topics/automation/advanced-automation/industrial-iot";
import { energy_optimization_control } from "./topics/automation/building-automation/energy-optimization-control";
import { chiller_plant_automation_auto } from "./topics/automation/building-automation/chiller-plant-automation";
import { hvac_automation } from "./topics/automation/building-automation/hvac-automation";
import { interlocks } from "./topics/automation/control-systems/interlocks";
import { sequencing_logic } from "./topics/automation/control-systems/sequencing-logic";
import { pid_control } from "./topics/automation/control-systems/pid-control";
import { instrumentation } from "./topics/automation/sensors-actuators/instrumentation";
import { actuators } from "./topics/automation/sensors-actuators/actuators";
import { sensors } from "./topics/automation/sensors-actuators/sensors";
import { profinet_ethernet_ip } from "./topics/automation/industrial-networks/profinet-ethernet-ip";
import { bacnet_automation } from "./topics/automation/industrial-networks/bacnet-automation";
import { modbus_automation } from "./topics/automation/industrial-networks/modbus-automation";
import { trends_and_alarms } from "./topics/automation/scada-hmi/trends-and-alarms";
import { scada_architecture } from "./topics/automation/scada-hmi/scada-architecture";
import { hmi_design } from "./topics/automation/scada-hmi/hmi-design";
import { scan_cycle } from "./topics/automation/plc-programming/scan-cycle";
import { ladder_logic } from "./topics/automation/plc-programming/ladder-logic";
import { plc_architecture } from "./topics/automation/plc-programming/plc-architecture";
import { digital_twin_engineering } from "./topics/scientific-computing/engineering-applications/digital-twin-engineering";
import { electrical_system_simulation } from "./topics/scientific-computing/engineering-applications/electrical-system-simulation";
import { hvac_simulation } from "./topics/scientific-computing/engineering-applications/hvac-simulation";
import { machine_learning_for_engineering } from "./topics/scientific-computing/data-and-ai/machine-learning-for-engineering";
import { scientific_data_analysis } from "./topics/scientific-computing/data-and-ai/scientific-data-analysis";
import { gpu_computing } from "./topics/scientific-computing/high-performance-computing/gpu-computing";
import { parallel_computing } from "./topics/scientific-computing/high-performance-computing/parallel-computing";
import { vectorization } from "./topics/scientific-computing/high-performance-computing/vectorization";
import { matplotlib } from "./topics/scientific-computing/programming-tools/matplotlib";
import { pandas } from "./topics/scientific-computing/programming-tools/pandas";
import { scipy } from "./topics/scientific-computing/programming-tools/scipy";
import { numpy } from "./topics/scientific-computing/programming-tools/numpy";
import { optimization } from "./topics/scientific-computing/computational-modeling/optimization";
import { simulation_methods } from "./topics/scientific-computing/computational-modeling/simulation-methods";
import { modeling_workflow } from "./topics/scientific-computing/computational-modeling/modeling-workflow";
import { pde_methods } from "./topics/scientific-computing/numerical-methods/pde-methods";
import { ode_solvers } from "./topics/scientific-computing/numerical-methods/ode-solvers";
import { numerical_integration } from "./topics/scientific-computing/numerical-methods/numerical-integration";
import { interpolation_and_approximation } from "./topics/scientific-computing/numerical-methods/interpolation-and-approximation";
import { root_finding } from "./topics/scientific-computing/numerical-methods/root-finding";
import { error_and_stability } from "./topics/scientific-computing/numerical-methods/error-and-stability";
import { differential_equations } from "./topics/scientific-computing/mathematical-foundations/differential-equations";
import { calculus_for_computing } from "./topics/scientific-computing/mathematical-foundations/calculus-for-computing";
import { linear_algebra_for_computing } from "./topics/scientific-computing/mathematical-foundations/linear-algebra-for-computing";
import { python_for_engineering } from "./topics/programming/engineering-computing/python-for-engineering";
import { sql_database } from "./topics/programming/database/sql-database";
import { backend } from "./topics/programming/web-development/backend";
import { frontend } from "./topics/programming/web-development/frontend";
import { git_github } from "./topics/programming/software-engineering/git-github";
import { testing } from "./topics/programming/software-engineering/testing";
import { architecture } from "./topics/programming/software-engineering/architecture";
import { clean_code } from "./topics/programming/software-engineering/clean-code";
import { files_and_data } from "./topics/programming/python/files-and-data";
import { oop } from "./topics/programming/python/oop";
import { functions } from "./topics/programming/python/functions";
import { python_basics } from "./topics/programming/python/python-basics";
import { advanced_electrical_engineering } from "./topics/electrical-engineering/advanced-electrical-engineering";
import { low_voltage_distribution } from "./topics/building-services/electrical-building-services/low-voltage-distribution";
import { emergency_power } from "./topics/building-services/electrical-building-services/emergency-power";
import { load_schedule } from "./topics/building-services/electrical-building-services/load-schedule";
import { cable_sizing } from "./topics/building-services/electrical-building-services/cable-sizing";
import { earthing } from "./topics/building-services/electrical-building-services/earthing";
import { lighting } from "./topics/building-services/electrical-building-services/lighting";
import { ups } from "./topics/building-services/electrical-building-services/ups";
import { ats_generator } from "./topics/building-services/electrical-building-services/ats-generator";
import { mcc } from "./topics/building-services/electrical-building-services/mcc";
import { mdb_smdb_db } from "./topics/building-services/electrical-building-services/mdb-smdb-db";
import { electrical_safety } from "./topics/electrical-engineering/electrical-safety";
import { cable_engineering } from "./topics/electrical-engineering/cable-engineering";
import { electrical_testing } from "./topics/electrical-engineering/electrical-testing";
import { power_quality } from "./topics/electrical-engineering/power-quality";
import { protection_system } from "./topics/electrical-engineering/protection-system";
import { motor_control_center } from "./topics/electrical-engineering/motor-control-center";
import { earthing_and_lightning } from "./topics/electrical-engineering/earthing-and-lightning";
import { lighting_system } from "./topics/electrical-engineering/lighting-system";
import { ups_system } from "./topics/electrical-engineering/ups-system";
import { generator_system } from "./topics/electrical-engineering/generator-system";
import { transformer_system } from "./topics/electrical-engineering/transformer-system";
import { power_distribution } from "./topics/electrical-engineering/power-distribution";
import { smart_building_optimization } from "./topics/building-services/bms-smart-building/smart-building-optimization";
import { trending_and_analytics } from "./topics/building-services/bms-smart-building/trending-and-analytics";
import { alarm_management } from "./topics/building-services/bms-smart-building/alarm-management";
import { iot_smart_sensors } from "./topics/building-services/bms-smart-building/iot-smart-sensors";
import { access_control_integration } from "./topics/building-services/bms-smart-building/access-control-integration";
import { lighting_control } from "./topics/building-services/bms-smart-building/lighting-control";
import { chiller_plant_automation } from "./topics/building-services/bms-smart-building/chiller-plant-automation";
import { hvac_integration } from "./topics/building-services/bms-smart-building/hvac-integration";
import { energy_monitoring } from "./topics/building-services/bms-smart-building/energy-monitoring";
import { modbus } from "./topics/building-services/bms-smart-building/modbus";
import { bacnet } from "./topics/building-services/bms-smart-building/bacnet";
import { bms_architecture } from "./topics/building-services/bms-smart-building/bms-architecture";
import { fire_safety_coordination } from "./topics/building-services/fire-protection/fire-safety-coordination";
import { fire_detection } from "./topics/building-services/fire-protection/fire-detection";
import { fire_suppression } from "./topics/building-services/fire-protection/fire-suppression";
import { fire_command_center } from "./topics/building-services/fire-protection/fire-command-center";
import { staircase_pressurization } from "./topics/building-services/fire-protection/staircase-pressurization";
import { smoke_control_system } from "./topics/building-services/fire-protection/smoke-control-system";
import { fire_pump_system } from "./topics/building-services/fire-protection/fire-pump-system";
import { hydrant_system } from "./topics/building-services/fire-protection/hydrant-system";
import { sprinkler_system } from "./topics/building-services/fire-protection/sprinkler-system";
import { fire_alarm } from "./topics/building-services/fire-protection/fire-alarm";
import { storm_water_system } from "./topics/building-services/plumbing-systems/storm-water-system";
import { sanitary_system } from "./topics/building-services/plumbing-systems/sanitary-system";
import { backflow_prevention } from "./topics/building-services/plumbing-systems/backflow-prevention";
import { pressure_control } from "./topics/building-services/plumbing-systems/pressure-control";
import { valves_and_fittings } from "./topics/building-services/plumbing-systems/valves-and-fittings";
import { pump_system } from "./topics/building-services/plumbing-systems/pump-system";
import { water_tank } from "./topics/building-services/plumbing-systems/water-tank";
import { pipe_sizing } from "./topics/building-services/plumbing-systems/pipe-sizing";
import { drainage } from "./topics/building-services/plumbing-systems/drainage";
import { hot_water_supply } from "./topics/building-services/plumbing-systems/hot-water-supply";
import { cold_water_supply } from "./topics/building-services/plumbing-systems/cold-water-supply";
import { plumbing_overview } from "./topics/building-services/plumbing-systems/plumbing-overview";
import { thermodynamicsInHVAC } from "./topics/building-services/hvac-systems/thermodynamics-in-hvac";
import { psychrometrics } from "./topics/building-services/hvac-systems/psychrometrics";
import { coolingLoad } from "./topics/building-services/hvac-systems/cooling-load";
import { chillerPlant } from "./topics/building-services/hvac-systems/chiller-plant";
import { ahuAndFcu } from "./topics/building-services/hvac-systems/ahu-and-fcu";
import { ductAndAirDistribution } from "./topics/building-services/hvac-systems/duct-and-air-distribution";

export const topicRegistry: Record<string, any> = {
  "plc-architecture": plc_architecture,
  "ladder-logic": ladder_logic,
  "scan-cycle": scan_cycle,
  "hmi-design": hmi_design,
  "scada-architecture": scada_architecture,
  "trends-and-alarms": trends_and_alarms,
  "modbus-automation": modbus_automation,
  "bacnet-automation": bacnet_automation,
  "profinet-ethernet-ip": profinet_ethernet_ip,
  "sensors": sensors,
  "actuators": actuators,
  "instrumentation": instrumentation,
  "pid-control": pid_control,
  "sequencing-logic": sequencing_logic,
  "interlocks": interlocks,
  "hvac-automation": hvac_automation,
  "energy-optimization-control": energy_optimization_control,
  "industrial-iot": industrial_iot,
  "digital-twin-automation": digital_twin_automation,
  "predictive-maintenance": predictive_maintenance,
  "linear-algebra-for-computing": linear_algebra_for_computing,
  "calculus-for-computing": calculus_for_computing,
  "differential-equations": differential_equations,
  "error-and-stability": error_and_stability,
  "root-finding": root_finding,
  "interpolation-and-approximation": interpolation_and_approximation,
  "numerical-integration": numerical_integration,
  "ode-solvers": ode_solvers,
  "pde-methods": pde_methods,
  "modeling-workflow": modeling_workflow,
  "simulation-methods": simulation_methods,
  "optimization": optimization,
  "numpy": numpy,
  "scipy": scipy,
  "pandas": pandas,
  "matplotlib": matplotlib,
  "vectorization": vectorization,
  "parallel-computing": parallel_computing,
  "gpu-computing": gpu_computing,
  "scientific-data-analysis": scientific_data_analysis,
  "machine-learning-for-engineering": machine_learning_for_engineering,
  "hvac-simulation": hvac_simulation,
  "electrical-system-simulation": electrical_system_simulation,
  "digital-twin-engineering": digital_twin_engineering,
  "python-basics": python_basics,
  "functions": functions,
  "oop": oop,
  "files-and-data": files_and_data,
  "clean-code": clean_code,
  "architecture": architecture,
  "testing": testing,
  "git-github": git_github,
  "frontend": frontend,
  "backend": backend,
  "sql-database": sql_database,
  "python-for-engineering": python_for_engineering,
  "advanced-electrical-engineering": advanced_electrical_engineering,
  "mdb-smdb-db": mdb_smdb_db,
  "mcc": mcc,
  "ats-generator": ats_generator,
  "ups": ups,
  "lighting": lighting,
  "earthing": earthing,
  "cable-sizing": cable_sizing,
  "load-schedule": load_schedule,
  "emergency-power": emergency_power,
  "low-voltage-distribution": low_voltage_distribution,
  "power-distribution": power_distribution,
  "transformer-system": transformer_system,
  "generator-system": generator_system,
  "ups-system": ups_system,
  "lighting-system": lighting_system,
  "earthing-and-lightning": earthing_and_lightning,
  "motor-control-center": motor_control_center,
  "protection-system": protection_system,
  "power-quality": power_quality,
  "electrical-testing": electrical_testing,
  "cable-engineering": cable_engineering,
  "electrical-safety": electrical_safety,
  "bms-architecture": bms_architecture,
  "bacnet": bacnet,
  "modbus": modbus,
  "energy-monitoring": energy_monitoring,
  "hvac-integration": hvac_integration,
  "chiller-plant-automation": chiller_plant_automation,
  "lighting-control": lighting_control,
  "access-control-integration": access_control_integration,
  "iot-smart-sensors": iot_smart_sensors,
  "alarm-management": alarm_management,
  "trending-and-analytics": trending_and_analytics,
  "smart-building-optimization": smart_building_optimization,
  "fire-alarm": fire_alarm,
  "sprinkler-system": sprinkler_system,
  "hydrant-system": hydrant_system,
  "fire-pump-system": fire_pump_system,
  "smoke-control-system": smoke_control_system,
  "staircase-pressurization": staircase_pressurization,
  "fire-command-center": fire_command_center,
  "fire-suppression": fire_suppression,
  "fire-detection": fire_detection,
  "fire-safety-coordination": fire_safety_coordination,
  "plumbing-overview": plumbing_overview,
  "cold-water-supply": cold_water_supply,
  "hot-water-supply": hot_water_supply,
  "drainage": drainage,
  "pipe-sizing": pipe_sizing,
  "water-tank": water_tank,
  "pump-system": pump_system,
  "valves-and-fittings": valves_and_fittings,
  "pressure-control": pressure_control,
  "backflow-prevention": backflow_prevention,
  "sanitary-system": sanitary_system,
  "storm-water-system": storm_water_system,
  "thermodynamics-in-hvac": thermodynamicsInHVAC,
  "psychrometrics": psychrometrics,
  "cooling-load": coolingLoad,
  "chiller-plant": chillerPlant,
  "ahu-and-fcu": ahuAndFcu,
  "duct-and-air-distribution": ductAndAirDistribution,
  "foundations-of-physics": physics_foundations_of_physics,
  "mathematical-physics": physics_mathematical_physics,
  "classical-mechanics": physics_classical_mechanics,
  "gravitation": physics_gravitation,
  "fluid-mechanics": physics_fluid_mechanics,
  "thermodynamics": physics_thermodynamics,
  "waves-oscillations-acoustics": physics_waves_oscillations_acoustics,
  "electricity-magnetism": physics_electricity_magnetism,
  "optics": physics_optics,
  "relativity": physics_relativity,
  "quantum-physics": physics_quantum_physics,
  "atomic-nuclear-particle": physics_atomic_nuclear_particle,
  "condensed-plasma-astrophysics": physics_condensed_plasma_astrophysics,
  "computational-biophysics-frontier": physics_computational_biophysics_frontier,
  "experiments-constants-equations-unsolved": physics_experiments_constants_equations_unsolved,
  "foundations-of-chemistry": chemistry_foundations_of_chemistry,
  "general-chemistry": chemistry_general_chemistry,
  "inorganic-chemistry": chemistry_inorganic_chemistry,
  "organic-chemistry": chemistry_organic_chemistry,
  "physical-chemistry": chemistry_physical_chemistry,
  "analytical-chemistry": chemistry_analytical_chemistry,
  "biochemistry": chemistry_biochemistry,
  "materials-chemistry": chemistry_materials_chemistry,
  "environmental-chemistry": chemistry_environmental_chemistry,
  "industrial-engineering-chemistry": chemistry_industrial_engineering_chemistry,
  "electrochemistry": chemistry_electrochemistry,
  "nuclear-chemistry": chemistry_nuclear_chemistry,
  "computational-ai-chemistry": chemistry_computational_ai_chemistry,
  "frontier-chemistry": chemistry_frontier_chemistry,
  "chemistry-database-layer": chemistry_chemistry_database_layer,
};

export function getTopic(topicId: string) {
  return topicRegistry[topicId];
}
