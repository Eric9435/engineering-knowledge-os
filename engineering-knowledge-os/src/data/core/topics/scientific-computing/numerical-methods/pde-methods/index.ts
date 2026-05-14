import { pde_methods_001 } from "./micro/pde-overview";
import { pde_methods_002 } from "./micro/heat-equation";
import { pde_methods_003 } from "./micro/wave-equation";
import { pde_methods_004 } from "./micro/laplace-equation";
import { pde_methods_005 } from "./micro/poisson-equation";
import { pde_methods_006 } from "./micro/finite-difference-method";
import { pde_methods_007 } from "./micro/finite-element-method";
import { pde_methods_008 } from "./micro/finite-volume-method";
import { pde_methods_009 } from "./micro/boundary-condition";
import { pde_methods_010 } from "./micro/mesh";
import { pde_methods_011 } from "./micro/grid";
import { pde_methods_012 } from "./micro/stability-criterion";
import { pde_methods_013 } from "./micro/cfd-foundation";
import { pde_methods_014 } from "./micro/heat-transfer-simulation";
import { pde_methods_015 } from "./micro/airflow-simulation";
import { pde_methods_016 } from "./micro/building-envelope-simulation";

export const pde_methods = {
  id: "pde-methods",
  title: "PDE Methods",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for PDE Methods, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    pde_methods_001, pde_methods_002, pde_methods_003, pde_methods_004, pde_methods_005, pde_methods_006, pde_methods_007, pde_methods_008, pde_methods_009, pde_methods_010, pde_methods_011, pde_methods_012, pde_methods_013, pde_methods_014, pde_methods_015, pde_methods_016
  ]
};
