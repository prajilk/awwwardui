import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import RedneckButton from "@/components/buttons/redneck-button";

const tailwindConfigTs = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-rollup": "rollup cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
        "text-rolldown": "rolldown cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
      },
      keyframes: {
        rollup: {
          "50%": {
            transform: "translateY(-75%)",
            opacity: "0",
          },
          "50.1%": { transform: "translateY(75%)" },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        rolldown: {
          "50%": { transform: "translateY(75%)" },
          "50.1%": {
            transform: "translateY(-75%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
`;

const tailwindConfigJs = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      animation: {
        "text-rollup": "rollup cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
        "text-rolldown": "rolldown cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
      },
      keyframes: {
        rollup: {
          "50%": {
            transform: "translateY(-75%)",
            opacity: "0",
          },
          "50.1%": { transform: "translateY(75%)" },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        rolldown: {
          "50%": { transform: "translateY(75%)" },
          "50.1%": {
            transform: "translateY(-75%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: []
}`;

const usageCode = `import RedneckButton from "@/components/ui/redneck-button";

const App = () => {
  return (
    <RedneckButton size={"default"}>View projects</RedneckButton>
  )
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/redneck-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/redneck-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-neutral-700 py-10">
        <RedneckButton size={"sm"}>View projects</RedneckButton>
        <RedneckButton>View projects</RedneckButton>
        <RedneckButton size={"lg"}>View projects</RedneckButton>
      </div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Usage</h1>
      <CodeViewer
        jsCode={usageCode}
        tsCode={usageCode}
        filePath="page.tsx"
        isLongCode={false}
      />

      <h2 className="mt-10 text-lg font-semibold">Install packages</h2>
      <p className="mb-5 mt-1">Install necessary packages.</p>
      <code className="relative my-3 block rounded-md bg-neutral-900 p-3">
        <span className="text-[#60ADEC]">npm install</span>{" "}
        class-variance-authority clsx tailwind-merge
        <CopyCode code="npm install class-variance-authority clsx tailwind-merge" />
      </code>

      <h2 className="mb-5 mt-10 text-lg font-semibold">Create cn function</h2>
      <div className="relative my-3">
        <CodeViewer
          isLongCode={false}
          filePath="@/lib/utils/cn"
          tsCode={cnTsCode}
          jsCode={cnJsCode}
        />
      </div>

      <h1 className="mt-10 text-xl font-semibold">Tailwind config code</h1>
      <p className="mb-5 mt-1">Modify the config file to add animations.</p>
      <CodeViewer
        jsCode={tailwindConfigJs}
        tsCode={tailwindConfigTs}
        filePath="tailwind.config.ts"
      />

      <h1 className="mb-5 mt-10 text-xl font-semibold">Button code</h1>
      <CodeViewer
        jsCode={jsCode}
        tsCode={tsCode}
        filePath="components/ui/redneck-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
