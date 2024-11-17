import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Counter>
        {({ count, incrementCount, hover, incrementHover }) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            hover={hover}
            incrementHover={incrementHover}
          />
        )}
      </Counter>
    </>
  );
}

export default App;
