import React from "react";

import DemoBlockWrapper from "../demo-block-wrapper";

export default function GridBackground() {
  return (
      <DemoBlockWrapper className="relative h-32 bg-white">
        <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] rounded-[inherit] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </DemoBlockWrapper>
  );
}
