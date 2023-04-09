// const redux = require("redux");
import { createStore } from "redux";

const initReducer = {
  counter: 0,
};

const counterReducer = (state = initReducer, action) => {
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.tpye === "DECREASE") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
