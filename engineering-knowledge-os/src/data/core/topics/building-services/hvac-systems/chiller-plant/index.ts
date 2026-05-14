import { chillerPlant_010 } from "./micro/absorption-chiller";
import { chillerPlant_080 } from "./micro/ai-optimization";
import { chillerPlant_005 } from "./micro/air-cooled-chiller";
import { chillerPlant_071 } from "./micro/airport-chiller-plant";
import { chillerPlant_066 } from "./micro/alarm-analytics";
import { chillerPlant_036 } from "./micro/approach-temperature";
import { chillerPlant_046 } from "./micro/bacnet-communication";
import { chillerPlant_045 } from "./micro/bms-integration";
import { chillerPlant_020 } from "./micro/cdw-loop";
import { chillerPlant_007 } from "./micro/centrifugal-chiller";
import { chillerPlant_079 } from "./micro/cfd-integration";
import { chillerPlant_001 } from "./micro/chiller-plant-overview";
import { chillerPlant_040 } from "./micro/chiller-sequencing";
import { chillerPlant_076 } from "./micro/chiller-simulation";
import { chillerPlant_012 } from "./micro/chw-loop";
import { chillerPlant_014 } from "./micro/chw-pump";
import { chillerPlant_013 } from "./micro/chws-chwr";
import { chillerPlant_090 } from "./micro/commissioning-and-retro-commissioning";
import { chillerPlant_039 } from "./micro/compressor-lift";
import { chillerPlant_026 } from "./micro/compressor";
import { chillerPlant_021 } from "./micro/condenser-pump";
import { chillerPlant_061 } from "./micro/condenser-water-reset";
import { chillerPlant_027 } from "./micro/condenser";
import { chillerPlant_023 } from "./micro/cooling-tower-fan-control";
import { chillerPlant_022 } from "./micro/cooling-tower-integration";
import { chillerPlant_058 } from "./micro/cooling-tower-optimization";
import { chillerPlant_031 } from "./micro/cop";
import { chillerPlant_073 } from "./micro/data-center-chiller-plant";
import { chillerPlant_035 } from "./micro/delta-t";
import { chillerPlant_019 } from "./micro/differential-pressure-control";
import { chillerPlant_078 } from "./micro/digital-twin";
import { chillerPlant_074 } from "./micro/district-cooling";
import { chillerPlant_068 } from "./micro/energy-dashboard";
import { chillerPlant_025 } from "./micro/evaporator";
import { chillerPlant_088 } from "./micro/exergy-analysis";
import { chillerPlant_028 } from "./micro/expansion-valve";
import { chillerPlant_069 } from "./micro/fault-detection-analytics";
import { chillerPlant_056 } from "./micro/flow-imbalance";
import { chillerPlant_051 } from "./micro/fouled-condenser";
import { chillerPlant_052 } from "./micro/fouled-evaporator";
import { chillerPlant_085 } from "./micro/harmonics-and-vfd-issues";
import { chillerPlant_083 } from "./micro/heat-exchanger-fouling-theory";
import { chillerPlant_003 } from "./micro/heat-transfer-chain";
import { chillerPlant_049 } from "./micro/high-condenser-pressure";
import { chillerPlant_072 } from "./micro/hospital-chiller-plant";
import { chillerPlant_018 } from "./micro/hydraulic-decoupler";
import { chillerPlant_087 } from "./micro/ice-storage-systems";
import { chillerPlant_075 } from "./micro/industrial-chilled-water";
import { chillerPlant_032 } from "./micro/iplv";
import { chillerPlant_067 } from "./micro/kpi-dashboard";
import { chillerPlant_034 } from "./micro/kw-rt";
import { chillerPlant_041 } from "./micro/lead-lag-logic";
import { chillerPlant_089 } from "./micro/lifecycle-cost-analysis";
import { chillerPlant_062 } from "./micro/load-based-sequencing";
import { chillerPlant_048 } from "./micro/low-delta-t-syndrome";
import { chillerPlant_050 } from "./micro/low-suction-pressure";
import { chillerPlant_081 } from "./micro/machine-learning-fault-detection";
import { chillerPlant_011 } from "./micro/magnetic-bearing-chiller";
import { chillerPlant_047 } from "./micro/modbus-communication";
import { chillerPlant_033 } from "./micro/nplv";
import { chillerPlant_030 } from "./micro/oil-management";
import { chillerPlant_063 } from "./micro/peak-demand-reduction";
import { chillerPlant_043 } from "./micro/pid-control";
import { chillerPlant_004 } from "./micro/plant-energy-flow";
import { chillerPlant_077 } from "./micro/plant-modeling";
import { chillerPlant_057 } from "./micro/plant-optimization";
import { chillerPlant_082 } from "./micro/predictive-energy-modeling";
import { chillerPlant_070 } from "./micro/predictive-maintenance";
import { chillerPlant_015 } from "./micro/primary-pumping";
import { chillerPlant_016 } from "./micro/primary-secondary-pumping";
import { chillerPlant_054 } from "./micro/pump-cavitation";
import { chillerPlant_059 } from "./micro/pump-optimization";
import { chillerPlant_065 } from "./micro/real-time-monitoring";
import { chillerPlant_029 } from "./micro/refrigerant-circuit";
import { chillerPlant_053 } from "./micro/refrigerant-leak";
import { chillerPlant_002 } from "./micro/refrigeration-principle";
import { chillerPlant_008 } from "./micro/screw-chiller";
import { chillerPlant_009 } from "./micro/scroll-chiller";
import { chillerPlant_055 } from "./micro/sensor-error";
import { chillerPlant_042 } from "./micro/staging-logic";
import { chillerPlant_038 } from "./micro/subcooling";
import { chillerPlant_037 } from "./micro/superheat";
import { chillerPlant_084 } from "./micro/surge-in-centrifugal-chillers";
import { chillerPlant_086 } from "./micro/thermal-energy-storage";
import { chillerPlant_064 } from "./micro/trend-analysis";
import { chillerPlant_060 } from "./micro/variable-flow-optimization";
import { chillerPlant_017 } from "./micro/variable-primary-flow";
import { chillerPlant_044 } from "./micro/vfd-integration";
import { chillerPlant_006 } from "./micro/water-cooled-chiller";

export const chillerPlant = {
  id: "chiller-plant",
  title: "Chiller Plant",
  summary:
    "Professional Chiller Plant engineering knowledge architecture covering thermodynamics, control systems, optimization, analytics, automation and scientific computing integration.",
  microTopics: [
    chillerPlant_010, chillerPlant_080, chillerPlant_005, chillerPlant_071, chillerPlant_066, chillerPlant_036, chillerPlant_046, chillerPlant_045, chillerPlant_020, chillerPlant_007, chillerPlant_079, chillerPlant_001, chillerPlant_040, chillerPlant_076, chillerPlant_012, chillerPlant_014, chillerPlant_013, chillerPlant_090, chillerPlant_039, chillerPlant_026, chillerPlant_021, chillerPlant_061, chillerPlant_027, chillerPlant_023, chillerPlant_022, chillerPlant_058, chillerPlant_031, chillerPlant_073, chillerPlant_035, chillerPlant_019, chillerPlant_078, chillerPlant_074, chillerPlant_068, chillerPlant_025, chillerPlant_088, chillerPlant_028, chillerPlant_069, chillerPlant_056, chillerPlant_051, chillerPlant_052, chillerPlant_085, chillerPlant_083, chillerPlant_003, chillerPlant_049, chillerPlant_072, chillerPlant_018, chillerPlant_087, chillerPlant_075, chillerPlant_032, chillerPlant_067, chillerPlant_034, chillerPlant_041, chillerPlant_089, chillerPlant_062, chillerPlant_048, chillerPlant_050, chillerPlant_081, chillerPlant_011, chillerPlant_047, chillerPlant_033, chillerPlant_030, chillerPlant_063, chillerPlant_043, chillerPlant_004, chillerPlant_077, chillerPlant_057, chillerPlant_082, chillerPlant_070, chillerPlant_015, chillerPlant_016, chillerPlant_054, chillerPlant_059, chillerPlant_065, chillerPlant_029, chillerPlant_053, chillerPlant_002, chillerPlant_008, chillerPlant_009, chillerPlant_055, chillerPlant_042, chillerPlant_038, chillerPlant_037, chillerPlant_084, chillerPlant_086, chillerPlant_064, chillerPlant_060, chillerPlant_017, chillerPlant_044, chillerPlant_006
  ]
};
