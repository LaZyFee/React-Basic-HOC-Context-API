import { useState } from "react";

const withCounter = (OriginalComponent) => {
  const WrappedComponent = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevState) => prevState + 1);
    };

    return (
      <OriginalComponent count={count} incrementCount={increment} {...props} />
    );
  };

  // Assign a display name for better debugging
  WrappedComponent.displayName = `WithCounter(${
    OriginalComponent.displayName || OriginalComponent.name || "Component"
  })`;

  return WrappedComponent;
};

export default withCounter;
