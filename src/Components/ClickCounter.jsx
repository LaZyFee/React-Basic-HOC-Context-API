/*eslint-disable */

import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, incrementCount, hover, incrementHover }) => {
  return (
    <>
      <button
        type="button"
        onClick={incrementCount}
        onMouseOver={incrementHover}
      >
        Clicked {count} times Hovered {hover} times
      </button>
    </>
  );
};

export default withCounter(ClickCounter);
