import React from 'react';
import { useSelector,  useDispatch } from"react-redux";
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/CounterActions';

const ReduxCounter = () => {

    const count = useSelector((state)=>state.count)
    console.log(count)
    const dispatch = useDispatch()
const handleIncrement =()=>{
dispatch(incrementCounter())
}


const handleReset = ()=>{
  dispatch(resetCounter())
}
const handleDecrement = () => {
  dispatch(decrementCounter());
};

    return (
      <div>
        <div>
          <h1>Redux Counter app</h1>

          <h1>Count : {count}</h1>

          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    );
};

export default ReduxCounter;


