import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const reset = () => {
        setCount(0);
    };
    return (
        // Reset button added to counter app
        <div>
            <section id="counter">
                <h2>Counter {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={reset}>Reset Counter</button>
            </section>
        </div>
    );
}



export default Counter;
