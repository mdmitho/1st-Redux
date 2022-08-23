const { createStore, combineReducers } = require("redux");

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
        numberofProducts: state.numberofProducts + 1,
      };

    default:
     return state;
  }
}



// // store
const store = createStore(productReducer);
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct("pen"));


// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";





// Cart STATE
const initialCartState ={
  cart: ["salt"],
  numgerofCart:1,
}


// cart action
const getCart =()=>{
return {
  type:GET_CART_ITEMS,
}

}


const addCart =(product)=>{
return {
  type:ADD_CART_ITEMS,
  payload:product,
}

}




// Cart REducer
const cartReducer =(state=initialCartState,action)=>{
  switch (action.type) {
    case GET_CART_ITEMS:
      
      return{
        ...state
      };
    case ADD_CART_ITEMS:
      
      return {
        cart: [...state.cart, action.payload],
        numgerofCart: state.numgerofCart + 1,
      };
  
    default:
     return state;
  }
}




// store
const store1 = createStore(cartReducer);
store1.subscribe(()=>{
  console.log(store1.getState());
})

store1.dispatch(getCart())
store1.dispatch(addCart("pennnnnnnnnnnn"));


// cartReducer 

const rootReducer = combineReducers({
  productR:productReducer,
  cartR:cartReducer
})


// store
const store2 = createStore(rootReducer);
store2.subscribe(() => {
  console.log(store2.getState());
});


store2.dispatch(getCart())
store2.dispatch(addCart("pennnnnnnnnnnnjkhjkhjhkj"));