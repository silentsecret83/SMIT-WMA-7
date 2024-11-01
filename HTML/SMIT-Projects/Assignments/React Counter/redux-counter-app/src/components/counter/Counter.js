import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/counterSlice";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import "./counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter App using React Redux Toolkit</h1>
      <div className="content">
        <div className="container">
          <div className="display">
            <div className="counter-display">{count}</div>
          </div>
          <div className="btn-group">
            <button onClick={() => dispatch(increment())}>
              <MdAdd />
            </button>
            <button onClick={() => dispatch(decrement())}>
              <FiMinus />
            </button>
            <button onClick={() => dispatch(reset())}>
              <GrPowerReset />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
