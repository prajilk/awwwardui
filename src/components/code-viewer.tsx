"use client";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyCode from "./copy-code";
import { useState } from "react";

const CodeViewer = ({
  jsCode,
  tsCode,
  filePath,
  isLongCode = true,
}: {
  jsCode: string;
  tsCode: string;
  filePath: string;
  isLongCode?: boolean;
}) => {
  const [isFullView, setIsFullView] = useState(!isLongCode);
  const [isTsSelected, setIsTsSelected] = useState(true);

  return (
    <div className="w-full rounded-lg bg-neutral-900">
      <div className="flex w-full items-center justify-between rounded-t-lg bg-neutral-700 px-5 py-3">
        <span className="text-neutral-500-400 text-sm">{filePath}</span>
        <select
          defaultValue={isTsSelected ? "typescript" : "javascript"}
          onChange={(e) => setIsTsSelected(e.target.value === "typescript")}
          className="flex items-center gap-2 rounded-md bg-neutral-900 px-2 py-1 text-xs"
        >
          <option value="typescript">Typescript</option>
          <option value="javascript">Javascript</option>
        </select>
      </div>
      <div
        className={`${isFullView ? "h-auto after:hidden" : "h-80 after:block"} relative overflow-hidden rounded-b-lg after:absolute after:inset-0 after:size-full after:bg-gradient-to-t after:from-black after:to-transparent`}
      >
        <SyntaxHighlighter
          language="tsx"
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            margin: 0,
            paddingBottom: isLongCode ? "40px" : "10px",
          }}
        >
          {isTsSelected ? tsCode : jsCode}
        </SyntaxHighlighter>
        <CopyCode code={isTsSelected ? tsCode : jsCode} />
        {!isFullView ? (
          <button
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-neutral-600 px-3 py-2 text-sm"
            onClick={() => setIsFullView(true)}
          >
            Show more
          </button>
        ) : (
          isLongCode && (
            <button
              className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full bg-neutral-600 px-3 py-2 text-sm"
              onClick={() => setIsFullView(false)}
            >
              Show less
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CodeViewer;
