import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

const handleIncrement =()=>{
    setCount((count)=> count +1)
}

    return (
        <div>
            <h1>Counter app</h1>

            <h1>Count : {count}</h1>

            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;