import { optimization_001 } from "./micro/optimization-overview";
import { optimization_002 } from "./micro/objective-function";
import { optimization_003 } from "./micro/decision-variable";
import { optimization_004 } from "./micro/constraint";
import { optimization_005 } from "./micro/local-minimum";
import { optimization_006 } from "./micro/global-minimum";
import { optimization_007 } from "./micro/gradient-descent";
import { optimization_008 } from "./micro/linear-programming";
import { optimization_009 } from "./micro/nonlinear-programming";
import { optimization_010 } from "./micro/constrained-optimization";
import { optimization_011 } from "./micro/multi-objective-optimization";
import { optimization_012 } from "./micro/energy-optimization";
import { optimization_013 } from "./micro/cost-optimization";
import { optimization_014 } from "./micro/control-optimization";
import { optimization_015 } from "./micro/engineering-trade-off";

export const optimization = {
  id: "optimization",
  title: "Optimization",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for Optimization, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    optimization_001, optimization_002, optimization_003, optimization_004, optimization_005, optimization_006, optimization_007, optimization_008, optimization_009, optimization_010, optimization_011, optimization_012, optimization_013, optimization_014, optimization_015
  ]
};
