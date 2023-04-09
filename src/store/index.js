// const redux = require("redux");
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterReducer.reducer, auth: authReducer.reducer },
});

export default store;
