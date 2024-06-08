import React from "react";

import DemoBlockWrapper from "../demo-block-wrapper";
import { cn } from "~/lib/utils";

export default function MetallicButton() {
  return (
    <div>
      <DemoBlockWrapper className="flex h-32 items-center justify-center">
        <button
          style={{ "--shine-deg": "45deg" } as React.CSSProperties}
          className={cn("text-[14px] p-[6px_16px] text-black bg-[linear-gradient(45deg,#999_5%,#fff_10%,#ccc_30%,#ddd_50%,#ccc_70%,#fff_80%,#999_95%)] [text-shadow:1px_1px_2px_rgba(255,255,255,0.5)] rounded-[10px] [box-shadow:0_2px_5px_rgba(0,0,0,0.3)] transition-all duration-200 ease-in-out hover:[transform:translateY(-2px)]")}
        >
          Download
        </button>
      </DemoBlockWrapper>
    </div>
  );
}
