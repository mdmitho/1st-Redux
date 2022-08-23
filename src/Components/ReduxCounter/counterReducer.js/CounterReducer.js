// state - count : 0
// actions _ increment , decrement, reset
// reducers - increment -> count => count + 1
// decrement  -> count => count-1
// store
//providing store in react
// use store

import { DECREMENT, INCREMENT, RESET } from "../../Services/Costants/CounterConstant";

const initialCounter = {count:0}

const CounterReducer = (state = initialCounter, action)=>{

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count +1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
            

    
        default:
         return state;
    }
}

export default CounterReducer;