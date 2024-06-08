import React from "react";

import useTypingEffect from "~/hooks/use-typing-effect";
import DemoBlockWrapper from "../demo-block-wrapper";

const texts = [
  "This is a simple text typing effect in React",
  "This effect is created using React Hooks",
  "We can use this effect to create a typing effect for our portfolio",
  "We can also use this effect to create a typing effect for our resume",
  "or for your blog",
  "or for your landing page",
  "let's go",
];

type TextTypingEffectProps = {
  isTypeByLetter?: boolean;
  duration?: number;
};

const TextTypingEffectWithTexts: React.FC<TextTypingEffectProps> = ({
  isTypeByLetter = false,
  duration = 200,
}) => {
  const [textIndex, setTextIndex] = React.useState(0);
  const textToShow = useTypingEffect(
    texts[textIndex]!,
    duration,
    isTypeByLetter,
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= texts.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <DemoBlockWrapper className="flex h-40 items-center justify-center">
      <span key={textIndex}>
        {textToShow}
      </span>
    </DemoBlockWrapper>
  );
};

export default TextTypingEffectWithTexts;
