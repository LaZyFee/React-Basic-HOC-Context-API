import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </>
  );
};

export default withCounter(ClickCounter);
