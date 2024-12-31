import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import TextShimmerButton from "@/components/buttons/text-shimmer-button";
import { Gamepad2 } from "lucide-react";

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
        "shimmer-text": "shimmer-text .2s linear",
      },
      keyframes: {
        "shimmer-text": {
          "0%": {
            filter: "blur(0px)"
          },
          "50%": {
            filter: "blur(3px)"
          },
          "100%": {
            filter: "blur(0px)"
          },
        }
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
        wavy: "wavy 0.8s ease-in-out infinite",
      },
      keyframes: {
        wavy: {
          "50%": {
            transform: "translateY(-3px)",
          }
        }
      },
    },
  },
  plugins: []
}`;

const usageCode = `import TextShimmerButton from "@/components/ui/text-shimmer-button";

const App = () => {
  return <TextShimmerButton size={"default"}>start game</TextShimmerButton>
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/text-shimmer-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/text-shimmer-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-[#1e1e1e] py-10">
        <TextShimmerButton size={"icon"} icon={<Gamepad2 />} />
        <TextShimmerButton size={"sm"} icon={<Gamepad2 />}>start new game</TextShimmerButton>
        <TextShimmerButton icon={<Gamepad2 />}>start new game</TextShimmerButton>
        <TextShimmerButton size={"lg"} icon={<Gamepad2 />}>start new game</TextShimmerButton>
      </div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Usage</h1>
      <CodeViewer
        jsCode={usageCode}
        tsCode={usageCode}
        filePath="page.tsx"
        isLongCode={false}
        showLanguageSelect={false}
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
        filePath="components/ui/wavy-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
