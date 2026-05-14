import { heatVsTemperature } from "./heat-vs-temperature";
import { firstLawEnergyBalance } from "./first-law-energy-balance";
import { refrigerationCycle } from "./refrigeration-cycle";
import { copAnalysis } from "./cop-analysis";
import { psychrometricsEnergy } from "./psychrometrics-energy";
import { heatTransfer } from "./heat-transfer";
import { secondLawEntropy } from "./second-law-entropy";
import { pressureTemperature } from "./pressure-temperature";
import { superheatSubcooling } from "./superheat-subcooling";
import { coolingTowerThermodynamics } from "./cooling-tower-thermodynamics";

export const thermodynamicsMicroContent = {
  "heat-vs-temperature": heatVsTemperature,
  "first-law-energy-balance": firstLawEnergyBalance,
  "refrigeration-cycle": refrigerationCycle,
  "cop-analysis": copAnalysis,
  "psychrometrics-energy": psychrometricsEnergy,
  "heat-transfer": heatTransfer,
  "second-law-entropy": secondLawEntropy,
  "pressure-temperature": pressureTemperature,
  "superheat-subcooling": superheatSubcooling,
  "cooling-tower-thermodynamics": coolingTowerThermodynamics
};
