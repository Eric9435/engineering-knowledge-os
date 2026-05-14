import { pipe_sizing_001 } from "./micro/pipe-sizing-overview";
import { pipe_sizing_002 } from "./micro/fixture-unit-method";
import { pipe_sizing_003 } from "./micro/flow-demand";
import { pipe_sizing_004 } from "./micro/velocity-limit";
import { pipe_sizing_005 } from "./micro/pressure-loss";
import { pipe_sizing_006 } from "./micro/pipe-diameter";
import { pipe_sizing_007 } from "./micro/equivalent-length";
import { pipe_sizing_008 } from "./micro/friction-loss";
import { pipe_sizing_009 } from "./micro/minor-losses";
import { pipe_sizing_010 } from "./micro/pump-head-relation";
import { pipe_sizing_011 } from "./micro/cold-water-pipe-sizing";
import { pipe_sizing_012 } from "./micro/hot-water-pipe-sizing";
import { pipe_sizing_013 } from "./micro/drainage-pipe-sizing";
import { pipe_sizing_014 } from "./micro/storm-water-pipe-sizing";
import { pipe_sizing_015 } from "./micro/sizing-mistakes";
import { pipe_sizing_016 } from "./micro/design-safety-margin";

export const pipe_sizing = {
  id: "pipe-sizing",
  title: "Pipe Sizing",
  summary:
    "Professional plumbing knowledge architecture for Pipe Sizing, covering system design, hydraulic meaning, pipe network, equipment, valves, troubleshooting, maintenance and building services application.",
  microTopics: [
    pipe_sizing_001, pipe_sizing_002, pipe_sizing_003, pipe_sizing_004, pipe_sizing_005, pipe_sizing_006, pipe_sizing_007, pipe_sizing_008, pipe_sizing_009, pipe_sizing_010, pipe_sizing_011, pipe_sizing_012, pipe_sizing_013, pipe_sizing_014, pipe_sizing_015, pipe_sizing_016
  ]
};
