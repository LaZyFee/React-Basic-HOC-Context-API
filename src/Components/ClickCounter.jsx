/*eslint-disable*/
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

export default ClickCounter;
