import { createStore } from "react-redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);

export default store;
