import { scipy_001 } from "./micro/scipy-overview";
import { scipy_002 } from "./micro/scipy-optimize";
import { scipy_003 } from "./micro/scipy-integrate";
import { scipy_004 } from "./micro/scipy-linear-algebra";
import { scipy_005 } from "./micro/scipy-interpolate";
import { scipy_006 } from "./micro/scipy-signal";
import { scipy_007 } from "./micro/ode-integration";
import { scipy_008 } from "./micro/root-solver";
import { scipy_009 } from "./micro/curve-fit";
import { scipy_010 } from "./micro/engineering-solver";
import { scipy_011 } from "./micro/scientific-function-library";
import { scipy_012 } from "./micro/numerical-workflow";

export const scipy = {
  id: "scipy",
  title: "SciPy",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for SciPy, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    scipy_001, scipy_002, scipy_003, scipy_004, scipy_005, scipy_006, scipy_007, scipy_008, scipy_009, scipy_010, scipy_011, scipy_012
  ]
};
