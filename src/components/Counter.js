import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increamentHandler = () => {
    dispatch({ type: "INCREASE" });
  };

  const decreamentHandler = () => {
    dispatch({ type: "DECREASE" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE : {counter} --</div>
      <div>
        <button onClick={increamentHandler}>INCREASE</button>
        <button onClick={decreamentHandler}>DECREASE</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
