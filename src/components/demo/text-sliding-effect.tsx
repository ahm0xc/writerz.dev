import React from "react";

import DemoBlockWrapper from "../demo-block-wrapper";

export default function TextSlidingEffect() {
  return (
    <DemoBlockWrapper className="relative grid  h-32 place-content-center">
      <h1 className="flex items-center text-lg font-medium text-neutral-400">
        Dive Into
        <span className="relative ml-1 h-[1em] w-36 overflow-hidden">
          <span className="animate-slide absolute h-full w-full -translate-y-full leading-none text-white">
            Ideas
          </span>
          <span className="animate-slide absolute h-full w-full -translate-y-full leading-none text-white [animation-delay:0.83s]">
            Tech
          </span>
          <span className="animate-slide absolute h-full w-full -translate-y-full leading-none text-white [animation-delay:1.83s]">
            Art
          </span>
        </span>
      </h1>
    </DemoBlockWrapper>
  );
}
