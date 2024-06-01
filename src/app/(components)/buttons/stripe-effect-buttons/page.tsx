import CodeViewer from "@/components/code-viewer";
import { readFileAsString } from "../../../../lib/utils/readFile";
import path from "path";
import CopyCode from "@/components/copy-code";
import { cnJsCode, cnTsCode } from "@/lib/code/cn-code";
import { ArrowDown } from "lucide-react";
import StripeEffectButton from "@/components/buttons/stripe-effect-button";

const usageCode = `import StripeEffectButton from "@/components/ui/stripe-effect-button";

const App = () => {
  return (
    <StripeEffectButton size={"default"}>Our excellent reviews</StripeEffectButton>
  )
}

export default App;`;

const WavyButtonsPage = () => {
  const tsCode = readFileAsString(
    path.resolve("./src/components/buttons/stripe-effect-button.tsx"),
  );
  const jsCode = readFileAsString(
    path.resolve("./src/lib/code/stripe-effect-button.jsx"),
  );

  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-semibold">Example</h1>
      <div className="grid place-items-center gap-10 rounded-md bg-white py-10">
        <StripeEffectButton size={"icon"}>
          <ArrowDown />
        </StripeEffectButton>
        <StripeEffectButton size={"sm"}>
          Our excellent reviews
        </StripeEffectButton>
        <StripeEffectButton>Our excellent reviews</StripeEffectButton>
        <StripeEffectButton size={"lg"}>
          Our excellent reviews
        </StripeEffectButton>
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

      <h1 className="mb-5 mt-10 text-xl font-semibold">Button code</h1>
      <CodeViewer
        jsCode={jsCode}
        tsCode={tsCode}
        filePath="components/ui/stripe-effect-button.tsx"
      />
    </div>
  );
};

export default WavyButtonsPage;
