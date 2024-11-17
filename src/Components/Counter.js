import { useState } from "react";

function Counter({ children }) {
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
        // Pass the state and handlers to the render prop
        children({
            count,
            incrementCount: incrementClick,
            hover,
            incrementHover,
        })
    );
}

export default Counter;
