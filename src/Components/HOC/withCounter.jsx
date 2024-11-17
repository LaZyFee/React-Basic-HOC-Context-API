import { useState } from "react";

const withCounter = (OriginalComponent) => {
  const WrappedComponent = (props) => {
    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(0);

    // Increment the click count
    const incrementClick = () => {
      setCount((prevState) => prevState + 1);
    };

    // Increment the hover count
    const incrementHover = () => {
      setHover((prevState) => prevState + 1);
    };

    return (
      <OriginalComponent
        count={count}
        incrementCount={incrementClick}
        hover={hover}
        incrementHover={incrementHover}
        {...props}
      />
    );
  };

  // Assign a display name for better debugging
  WrappedComponent.displayName = `WithCounter(${
    OriginalComponent.displayName || OriginalComponent.name || "Component"
  })`;

  return WrappedComponent;
};

export default withCounter;
