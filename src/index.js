
const { createStore } = require("redux");


{/* defining constants */}
const INCREMENT = "INCREMENT";
const DECREMENT = " DECREMENT";


//state
const initialCounterState = {
  count: 0,
}



// action - Object - type payload 
const incrementCounter =( )=> {
  return {
    type: INCREMENT,
  };
}

const decrementCounter = ()=> {
  return {
    type: DECREMENT,
  }
}

// create reducer for counter

// reducer holo akti pure function ja amadar losick handal korbay action type ar upor base koray
const counterReducer = (state=initialCounterState,action)=>{
  switch (action.type){
    case INCREMENT:
      return {
        ...state,//sob khulo propati akhana niay aslam 
        count:state.count +1  // sudu count update korci 
      }
      //


    case DECREMENT :
      return {
        ...state, //sob khulo propati akhana niay aslam
        count: state.count - 1, // sudu count update korci
      };


      //
    default :state;
  }
}





// 1 State
//2 dispatch action

//3 reducer
//4  store - getState(), dispatch(), subscribe()

//create Store

const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState())
})

// dispatch action

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())




