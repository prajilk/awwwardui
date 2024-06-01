import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import TextFillUpButton4 from "@/components/buttons/text-fill-up-button4";

const usageCode = `import TextFillUpButton4 from "@/components/ui/text-fill-up-button4";

const App = () => {
  return (
    <TextFillUpButton4 size={"default"}>view all posts</TextFillUpButton4>
  )
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/text-fill-up-button4.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/text-fill-up-button4.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-neutral-900 py-10">
        <TextFillUpButton4 size={"sm"}>view all posts</TextFillUpButton4>
        <TextFillUpButton4>view all posts</TextFillUpButton4>
        <TextFillUpButton4 size={"lg"}>view all posts</TextFillUpButton4>
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

      <h1 className="mb-5 mt-10 text-xl font-semibold">Button code</h1>
      <CodeViewer
        jsCode={jsCode}
        tsCode={tsCode}
        filePath="components/ui/text-fill-up-button4.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
