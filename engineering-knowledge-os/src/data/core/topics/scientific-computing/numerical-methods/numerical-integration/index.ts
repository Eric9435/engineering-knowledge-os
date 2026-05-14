import { numerical_integration_001 } from "./micro/numerical-integration-overview";
import { numerical_integration_002 } from "./micro/rectangle-rule";
import { numerical_integration_003 } from "./micro/trapezoidal-rule";
import { numerical_integration_004 } from "./micro/simpson-rule";
import { numerical_integration_005 } from "./micro/gaussian-quadrature";
import { numerical_integration_006 } from "./micro/integration-error";
import { numerical_integration_007 } from "./micro/step-size";
import { numerical_integration_008 } from "./micro/area-under-curve";
import { numerical_integration_009 } from "./micro/energy-integration";
import { numerical_integration_010 } from "./micro/power-to-energy-calculation";
import { numerical_integration_011 } from "./micro/load-profile-integration";
import { numerical_integration_012 } from "./micro/hvac-energy-use";
import { numerical_integration_013 } from "./micro/electrical-energy-calculation";
import { numerical_integration_014 } from "./micro/time-series-integration";

export const numerical_integration = {
  id: "numerical-integration",
  title: "Numerical Integration",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for Numerical Integration, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    numerical_integration_001, numerical_integration_002, numerical_integration_003, numerical_integration_004, numerical_integration_005, numerical_integration_006, numerical_integration_007, numerical_integration_008, numerical_integration_009, numerical_integration_010, numerical_integration_011, numerical_integration_012, numerical_integration_013, numerical_integration_014
  ]
};
