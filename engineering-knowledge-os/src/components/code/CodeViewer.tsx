"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  title: string;
  language: string;
  code: string;
};

export default function CodeViewer({
  title,
  language,
  code
}: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-black text-blue-950">
          {title}
        </h2>

        <div className="rounded-xl bg-blue-950 px-3 py-1 text-xs font-black text-white">
          {language}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            fontSize: "0.9rem",
            borderRadius: "1rem"
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
