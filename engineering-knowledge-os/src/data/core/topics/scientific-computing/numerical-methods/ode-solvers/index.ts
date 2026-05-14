import { ode_solvers_001 } from "./micro/ode-solver-overview";
import { ode_solvers_002 } from "./micro/euler-method";
import { ode_solvers_003 } from "./micro/improved-euler-method";
import { ode_solvers_004 } from "./micro/runge-kutta-method";
import { ode_solvers_005 } from "./micro/rk4";
import { ode_solvers_006 } from "./micro/adaptive-step-size";
import { ode_solvers_007 } from "./micro/stiff-equation";
import { ode_solvers_008 } from "./micro/explicit-method";
import { ode_solvers_009 } from "./micro/implicit-method";
import { ode_solvers_010 } from "./micro/time-marching";
import { ode_solvers_011 } from "./micro/dynamic-simulation";
import { ode_solvers_012 } from "./micro/thermal-room-model";
import { ode_solvers_013 } from "./micro/tank-level-model";
import { ode_solvers_014 } from "./micro/motor-dynamic-model";
import { ode_solvers_015 } from "./micro/control-response-simulation";

export const ode_solvers = {
  id: "ode-solvers",
  title: "ODE Solvers",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for ODE Solvers, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    ode_solvers_001, ode_solvers_002, ode_solvers_003, ode_solvers_004, ode_solvers_005, ode_solvers_006, ode_solvers_007, ode_solvers_008, ode_solvers_009, ode_solvers_010, ode_solvers_011, ode_solvers_012, ode_solvers_013, ode_solvers_014, ode_solvers_015
  ]
};
