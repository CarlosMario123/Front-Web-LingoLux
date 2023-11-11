import { useState, useEffect } from "react";

export const useStyleRandoms = (colors) => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(colors[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === colors.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }

      setColor(colors[index]);
      console.log(color);
    }, 1000);

    return () => clearInterval(interval);
  }, [index, colors]);

  return color;
};
