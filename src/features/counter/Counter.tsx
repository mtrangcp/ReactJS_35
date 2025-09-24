import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import { decrement, increment, reset } from "./counterSlice";

export default function Counter() {
  const result = useSelector((state: RootState) => state.counter.value);

  const dispath = useDispatch();

  return (
    <div>
      <h3>count: {result}</h3>
      <button onClick={() => dispath(increment())}>increse</button>
      <button onClick={() => dispath(decrement())}>decrese</button>
      <button onClick={() => dispath(reset())}>reset</button>
    </div>
  );
}
