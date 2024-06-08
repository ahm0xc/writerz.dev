import React from "react";

import DemoBlockWrapper from "../demo-block-wrapper";

export default function GridBackground() {
  return (
    <DemoBlockWrapper className="relative h-32">
      <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </DemoBlockWrapper>
  );
}
