import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import DoubleLabelButton from "@/components/buttons/double-label-button";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import { ArrowUp } from "lucide-react";

const usageCode = `import DoubleLabelButton from "@/components/ui/double-label-button";

const App = () => {
  return <DoubleLabelButton size={"default"}>Explore collection</DoubleLabelButton>
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/double-label-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/double-label-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-white py-10">
        <DoubleLabelButton size={"icon"}>
          <ArrowUp />
        </DoubleLabelButton>
        <DoubleLabelButton size={"sm"}>Explore collection</DoubleLabelButton>
        <DoubleLabelButton>Explore collection</DoubleLabelButton>
        <DoubleLabelButton size={"lg"}>Explore collection</DoubleLabelButton>
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
        filePath="components/ui/double-label-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
