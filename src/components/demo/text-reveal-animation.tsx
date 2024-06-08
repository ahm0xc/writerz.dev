import React from "react";
import { RotateCwIcon } from "lucide-react";

import DemoBlockWrapper from "../demo-block-wrapper";

export default function TextRevealAnimation() {
  const [key, setKey] = React.useState(0);

  return (
    <DemoBlockWrapper className="relative h-32 grid place-content-center">
      <div>
        <button className="absolute right-3 top-3" onClick={() => setKey(key + 1)}>
          <RotateCwIcon size={15} />
        </button>
        <Text text="Text Reveal Animation 🤯" key={key} />
      </div>
    </DemoBlockWrapper>
  );
}

function Text({ text }: { text: string }) {
  return (
    <h1 className="overflow-hidden text-2xl font-bold leading-6 text-white">
      {text.match(/./gu)!.map((char, index) => (
        <span
          className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
