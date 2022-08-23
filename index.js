const { createStore,applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCTS"

// products STATE
const initialProductState = {
  products: ["sugar", "salt"],
  numgerofProducts: 2,
};


// product action
const getProducts =()=>{
  return {
    type:GET_PRODUCTS,
  }
  }
  
  const addProduct =(product)=>{
    return {
      type: ADD_PRODUCT,
      payload: product,
    };
  }


  // productREducer
const productReducer =(state=initialProductState,action)=>{
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        product: [...state.products, action.payload],
        numgerofProducts: state.numgerofProducts + 1,
      };

    default:
     return state;
  }
}



// // store
const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct("pen"));






