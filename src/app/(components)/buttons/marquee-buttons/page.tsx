import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SquigglyButton from "@/components/buttons/squiggly-button";
import MarqueeButton from "@/components/buttons/marquee-button";

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
        "text-marquee": "text-marquee 2s linear infinite forwards"
      },
      keyframes: {
        "text-marquee": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-125%)",
          },
        }
      }
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
        "text-marquee": "text-marquee 2s linear infinite forwards"
      },
      keyframes: {
        "text-marquee": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-125%)",
          },
        }
      },
    },
  },
  plugins: []
}`;

const usageCode = `import MarqueeButton from "@/components/ui/marquee-button";

const App = () => {
  return (
    <MarqueeButton size={"default"}>Book a demo</MarqueeButton>
  )
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/marquee-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/marquee-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-white py-10">
        <MarqueeButton size={"icon"}>
          <ArrowLeft />
        </MarqueeButton>
        <MarqueeButton size={"sm"}>Book a demo</MarqueeButton>
        <MarqueeButton>Book a demo</MarqueeButton>
        <MarqueeButton size={"lg"}>Book a demo</MarqueeButton>
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
        filePath="components/ui/marquee-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
