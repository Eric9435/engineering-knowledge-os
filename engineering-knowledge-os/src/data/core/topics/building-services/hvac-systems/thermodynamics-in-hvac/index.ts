import { stateVariables } from "./micro/state-variables";
import { heatVsTemperature } from "./micro/heat-vs-temperature";
import { thermalEquilibrium } from "./micro/thermal-equilibrium";
import { sensibleLatentHeat } from "./micro/sensible-latent-heat";
import { enthalpy } from "./micro/enthalpy";
import { specificHeatCapacity } from "./micro/specific-heat-capacity";
import { massFlowHeatFlow } from "./micro/mass-flow-heat-flow";
import { chilledWaterDeltaT } from "./micro/chilled-water-delta-t";
import { approachTemperature } from "./micro/approach-temperature";
import { firstLawEnergyBalance } from "./micro/first-law-energy-balance";
import { secondLawEntropy } from "./micro/second-law-entropy";
import { evaporatorThermodynamics } from "./micro/evaporator-thermodynamics";
import { compressorWork } from "./micro/compressor-work";
import { condenserThermodynamics } from "./micro/condenser-thermodynamics";
import { expansionValveThermodynamics } from "./micro/expansion-valve-thermodynamics";
import { refrigerationCycle } from "./micro/refrigeration-cycle";
import { pressureEnthalpyDiagram } from "./micro/pressure-enthalpy-diagram";
import { pressureTemperature } from "./micro/pressure-temperature";
import { superheatSubcooling } from "./micro/superheat-subcooling";
import { heatTransfer } from "./micro/heat-transfer";
import { psychrometricsEnergy } from "./micro/psychrometrics-energy";
import { copAnalysis } from "./micro/cop-analysis";
import { coolingTowerThermodynamics } from "./micro/cooling-tower-thermodynamics";
import { refrigerantProperties } from "./micro/refrigerant-properties";
import { partLoadPerformance } from "./micro/part-load-performance";
import { thermodynamicFaultDiagnosis } from "./micro/thermodynamic-fault-diagnosis";
import { heatExchangerFouling } from "./micro/heat-exchanger-fouling";
import { exergyIrreversibility } from "./micro/exergy-irreversibility";
import { hvacEnergyOptimization } from "./micro/hvac-energy-optimization";
import { digitalTwinThermodynamics } from "./micro/digital-twin-thermodynamics";

export const thermodynamicsInHVAC = {
  id: "thermodynamics-in-hvac",
  title: "Thermodynamics in HVAC",
  summary:
    "HVAC thermodynamics ကို separated micro files structure နဲ့ heat, energy balance, refrigeration cycle, heat transfer, COP, psychrometrics, pressure-temperature, superheat/subcooling, cooling tower thermodynamics, fault diagnosis, optimization and digital twin အထိ professional Myanmar lecture အနေနဲ့လေ့လာရန်။",

  microTopics: [
    stateVariables,
    heatVsTemperature,
    thermalEquilibrium,
    sensibleLatentHeat,
    enthalpy,
    specificHeatCapacity,
    massFlowHeatFlow,
    chilledWaterDeltaT,
    approachTemperature,
    firstLawEnergyBalance,
    secondLawEntropy,
    evaporatorThermodynamics,
    compressorWork,
    condenserThermodynamics,
    expansionValveThermodynamics,
    refrigerationCycle,
    pressureEnthalpyDiagram,
    pressureTemperature,
    superheatSubcooling,
    heatTransfer,
    psychrometricsEnergy,
    copAnalysis,
    coolingTowerThermodynamics,
    refrigerantProperties,
    partLoadPerformance,
    thermodynamicFaultDiagnosis,
    heatExchangerFouling,
    exergyIrreversibility,
    hvacEnergyOptimization,
    digitalTwinThermodynamics
  ]
};
