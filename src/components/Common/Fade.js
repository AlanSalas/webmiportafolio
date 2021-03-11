import React from "react";
import { useSpring, animated } from "react-spring";

const Fade = ({ children }) => {
  const propFade = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" },
  });

  return <animated.div style={propFade}>{children}</animated.div>;
};

export default Fade;
