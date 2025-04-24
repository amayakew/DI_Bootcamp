import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState<number>(0);
    const [lastAction, setLastAction] = useState<'increment' | 'decrement' | 'no actions yet'>('no actions yet');

    const handleIncrement = () => {
        setCount(prev => prev + 1);
        setLastAction('increment');
    };

    const handleDecrement = () => {
        setCount(prev => prev - 1);
        setLastAction('decrement');
    };

    return (
        <>
            <h4 style={{textDecoration: 'underline blue 2px'}}>Exercise 3</h4>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}> +1 </button>
            <button onClick={handleDecrement}> -1 </button>
            <p>Last action: <em>{lastAction}</em></p>
        </>
    );
};

export default Counter;