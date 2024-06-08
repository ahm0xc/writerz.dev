import React from "react";

import DemoBlockWrapper from "../demo-block-wrapper";

export default function GridBackground() {
  return (
    <DemoBlockWrapper className="relative h-32">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-[inherit]"></div>
    </DemoBlockWrapper>
  );
}
