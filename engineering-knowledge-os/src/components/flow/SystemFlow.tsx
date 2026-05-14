"use client";

import ReactFlow, {
  Background,
  Controls,
  MiniMap
} from "reactflow";

import "reactflow/dist/style.css";

import {
  architectureNodes,
  architectureEdges
} from "@/data/architecture/systemArchitecture";

const nodes = architectureNodes.map((node, index) => ({
  id: node.id,
  position: {
    x: (index % 3) * 320,
    y: Math.floor(index / 3) * 220
  },
  data: {
    label: (
      <div className="w-64 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-lg">
        <div className="mb-3 inline-flex rounded-full bg-blue-950 px-3 py-1 text-xs font-black text-white">
          Domain
        </div>

        <h2 className="text-xl font-black text-blue-950">
          {node.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {node.description}
        </p>
      </div>
    )
  },
  type: "default"
}));

const edges = architectureEdges.map(([source, target], index) => ({
  id: `e-${index}`,
  source,
  target,
  animated: true,
  style: {
    stroke: "#172554",
    strokeWidth: 2
  }
}));

export default function SystemFlow() {
  return (
    <div className="h-[900px] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
