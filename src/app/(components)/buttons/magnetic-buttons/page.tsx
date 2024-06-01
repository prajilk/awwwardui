import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import { Menu } from "lucide-react";
import MagneticButton from "@/components/buttons/magnetic-button";

const tailwindConfigTs = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "elastic-out": "var(--elastic-out)",
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
      transitionTimingFunction: {
        "elastic-out": "var(--elastic-out)",
      },
    },
  },
  plugins: []
}`;

const usageCode = `import MagneticButton from "@/components/ui/magnetic-button";

const App = () => {
  return (
    <MagneticButton size={"default"}>Magnetic button</MagneticButton>
  )
}

export default App;`;

const customEase = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --elastic-out: linear(
      0,
      0.2178 2.1%,
      1.1144 8.49%,
      1.2959 10.7%,
      1.3463 11.81%,
      1.3705 12.94%,
      1.3726,
      1.3643 14.48%,
      1.3151 16.2%,
      1.0317 21.81%,
      0.941 24.01%,
      0.8912 25.91%,
      0.8694 27.84%,
      0.8698 29.21%,
      0.8824 30.71%,
      1.0122 38.33%,
      1.0357,
      1.046 42.71%,
      1.0416 45.7%,
      0.9961 53.26%,
      0.9839 57.54%,
      0.9853 60.71%,
      1.0012 68.14%,
      1.0056 72.24%,
      0.9981 86.66%,
      1
    );
  }
}
`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/magnetic-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/magnetic-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-neutral-900 py-10">
        <MagneticButton size={"icon"}>
          <Menu />
        </MagneticButton>
        <MagneticButton size={"sm"}>Magnetic button</MagneticButton>
        <MagneticButton>Magnetic button</MagneticButton>
        <MagneticButton size={"lg"}>Magnetic button</MagneticButton>
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
        class-variance-authority clsx tailwind-merge framer-motion
        <CopyCode code="npm install class-variance-authority clsx tailwind-merge framer-motion" />
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

      <h1 className="mb-5 mt-10 text-xl font-semibold">
        Add custom ease in css file.
      </h1>
      <CodeViewer
        jsCode={customEase}
        tsCode={customEase}
        filePath="global.css"
        language="css"
        showLanguageSelect={false}
      />

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
        filePath="components/ui/magnetic-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
