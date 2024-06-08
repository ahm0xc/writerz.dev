import React from "react";
import { RotateCwIcon } from "lucide-react";

import DemoBlockWrapper from "../demo-block-wrapper";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export default function EncryptedTextEffect() {
  const [key, setKey] = React.useState(0);

  return (
    <DemoBlockWrapper className="relative h-32 grid place-content-center">
      <div>
        <button
          className="absolute right-3 top-3"
          onClick={() => setKey(key + 1)}
        >
          <RotateCwIcon size={15} />
        </button>
        <Text text="Hello Folks!!!" key={key} />
      </div>
    </DemoBlockWrapper>
  );
}

interface TextEncryptedProps {
  text: string;
  interval?: number;
}

function Text({ text, interval = 50 }: TextEncryptedProps) {
  const [outputText, setOutputText] = React.useState("");
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }
  return (
    <span className="text-white">
      {outputText}
      {remainder}
    </span>
  );
}
