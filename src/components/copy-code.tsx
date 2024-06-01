"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";

const CopyCode = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setCopied(false), 3000);
    return () => clearInterval(id);
  }, [copied]);

  return (
    <button
      className="absolute right-0 top-0 z-10 m-1 rounded-full p-2 hover:bg-neutral-600"
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
    >
      {copied ? (
        <ClipboardCheck size={20} className="text-green-500" />
      ) : (
        <Clipboard size={20} />
      )}
    </button>
  );
};

export default CopyCode;
