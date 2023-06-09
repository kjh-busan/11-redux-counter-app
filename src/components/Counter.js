// import Component from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const increamentHandler = () => {
    dispatch(counterActions.increnent());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decreamentHandler = () => {
    dispatch(counterActions.decrenent());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>-- COUNTER VALUE : {counter} --</div>
      )}
      <div>
        <button onClick={increamentHandler}>INCREASE</button>
        <button onClick={increaseHandler}>INCREASE by 5</button>
        <button onClick={decreamentHandler}>DECREASE</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   increamentHandler() {
//     this.props.increase();
//   }

//   decreamentHandler() {
//     this.props.decrease();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>
//           -- COUNTER VALUE : {this.porps.counter} --
//         </div>
//         <div>
//           <button onClick={this.increamentHandler.bind(this)}>INCREASE</button>
//           <button onClick={this.decreamentHandler.bind(this)}>DECREASE</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch({ type: "INCREASE" }),
//     decrease: () => dispatch({ type: "DECREASE" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
