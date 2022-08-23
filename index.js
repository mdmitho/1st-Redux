// state - count : 0
// action - increment, decrement, reset
//reducer 
// store

const {createStore}= require ("redux")

// constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

const initialState = {
  count:0
}

const incrementCounterAction =()=>{
  return{
    type: INCREMENT,
  }
}


const decrementCounterAction =()=>{
  return {
    type: DECREMENT,
  };
}


const resetCounterAction =()=>{
  return {
    type: RESET,
  };
}

// creating reducer

const counterReducer = (state=initialState,action)=>{
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        count:state.count +1,
      }
    case DECREMENT:
      return {
        ...state,
        count:state.count - 1,
      }
    case RESET:
      return {
        ...state,
        count:0,
      }
      default:state;
  }
}


//Store
const store = createStore(counterReducer)
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
