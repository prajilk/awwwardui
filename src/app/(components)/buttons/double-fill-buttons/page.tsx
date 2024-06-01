import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import { ArrowLeft } from "lucide-react";
import DoubleFillButton from "@/components/buttons/double-fill-button";

const usageCode = `import DoubleFillButton from "@/components/ui/double-fill-button";

const App = () => {
  return (
    <DoubleFillButton size={"default"}>Try for free</DoubleFillButton>
  )
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/double-fill-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/double-fill-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-white py-10">
        <DoubleFillButton size={"icon"}>
          <ArrowLeft />
        </DoubleFillButton>
        <DoubleFillButton size={"sm"}>Try for free</DoubleFillButton>
        <DoubleFillButton>Try for free</DoubleFillButton>
        <DoubleFillButton size={"lg"}>Try for free</DoubleFillButton>
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

      <h1 className="mb-5 mt-10 text-xl font-semibold">Button code</h1>
      <CodeViewer
        jsCode={jsCode}
        tsCode={tsCode}
        filePath="components/ui/double-fill-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
