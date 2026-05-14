import { modeling_workflow_001 } from "./micro/modeling-workflow-overview";
import { modeling_workflow_002 } from "./micro/problem-definition";
import { modeling_workflow_003 } from "./micro/system-boundary";
import { modeling_workflow_004 } from "./micro/assumption";
import { modeling_workflow_005 } from "./micro/input-variable";
import { modeling_workflow_006 } from "./micro/output-variable";
import { modeling_workflow_007 } from "./micro/parameter";
import { modeling_workflow_008 } from "./micro/state-variable";
import { modeling_workflow_009 } from "./micro/governing-equation";
import { modeling_workflow_010 } from "./micro/model-calibration";
import { modeling_workflow_011 } from "./micro/model-validation";
import { modeling_workflow_012 } from "./micro/sensitivity-analysis";
import { modeling_workflow_013 } from "./micro/uncertainty-analysis";
import { modeling_workflow_014 } from "./micro/model-limitation";
import { modeling_workflow_015 } from "./micro/engineering-interpretation";
import { modeling_workflow_016 } from "./micro/report-writing";

export const modeling_workflow = {
  id: "modeling-workflow",
  title: "Modeling Workflow",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for Modeling Workflow, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    modeling_workflow_001, modeling_workflow_002, modeling_workflow_003, modeling_workflow_004, modeling_workflow_005, modeling_workflow_006, modeling_workflow_007, modeling_workflow_008, modeling_workflow_009, modeling_workflow_010, modeling_workflow_011, modeling_workflow_012, modeling_workflow_013, modeling_workflow_014, modeling_workflow_015, modeling_workflow_016
  ]
};
