import { createStore } from "redux";
import CounterReducer from "./Components/ReduxCounter/counterReducer.js/CounterReducer";

const store = createStore(CounterReducer)

export default store