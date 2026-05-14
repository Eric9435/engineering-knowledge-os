import { gpu_computing_001 } from "./micro/gpu-computing-overview";
import { gpu_computing_002 } from "./micro/cpu-vs-gpu";
import { gpu_computing_003 } from "./micro/cuda-concept";
import { gpu_computing_004 } from "./micro/gpu-kernel";
import { gpu_computing_005 } from "./micro/gpu-memory";
import { gpu_computing_006 } from "./micro/parallel-threads";
import { gpu_computing_007 } from "./micro/matrix-acceleration";
import { gpu_computing_008 } from "./micro/scientific-gpu-workload";
import { gpu_computing_009 } from "./micro/cfd-gpu";
import { gpu_computing_010 } from "./micro/machine-learning-gpu";
import { gpu_computing_011 } from "./micro/engineering-simulation-acceleration";
import { gpu_computing_012 } from "./micro/gpu-limitation";

export const gpu_computing = {
  id: "gpu-computing",
  title: "GPU Computing",
  summary:
    "Very wide and complex Scientific Computing knowledge architecture for GPU Computing, covering mathematical modeling, numerical methods, programming implementation, validation and engineering applications.",

  microTopics: [
    gpu_computing_001, gpu_computing_002, gpu_computing_003, gpu_computing_004, gpu_computing_005, gpu_computing_006, gpu_computing_007, gpu_computing_008, gpu_computing_009, gpu_computing_010, gpu_computing_011, gpu_computing_012
  ]
};
