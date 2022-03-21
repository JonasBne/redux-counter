import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button className={classes.button} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className={classes.button} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </main>
  );
};

export default Counter;
