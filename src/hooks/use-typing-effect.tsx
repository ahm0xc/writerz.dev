import * as React from "react";

const useTypingEffect = (
  text: string,
  duration: number,
  isTypeByLetter = false,
) => {
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const items = isTypeByLetter ? text.split("") : text.split(" ");

  React.useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  React.useEffect(() => {
    if (currentPosition >= items.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? "" : " ");
};

export default useTypingEffect;
