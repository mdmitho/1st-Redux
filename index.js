// state - count : 0
// action - increment, decrement, reset
//reducer 
// store

const {createStore}= require ("redux")

// constant

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const RESET = "RESET"
const ADD_USER = "add user"

const initialState = {
  users:["hello"],
  count:1
}

const addUser =(user)=>{
  return {
    type: ADD_USER,
    payload: user,
  };
}



// creating reducer

const userReducer = (state=initialState,action)=>{
  switch (action.type) {
  
    case ADD_USER:
      return {
        users:[...state.users , action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
}


//Store
const store = createStore(userReducer)
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addUser("booss"))
store.dispatch(addUser("gmmm"))
store.dispatch(addUser("gmmm22222222"))