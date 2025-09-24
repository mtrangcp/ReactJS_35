import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import { randomListNumber } from "./listNumberSlice";

export default function ListNumber() {
  const { listNum } = useSelector((state: RootState) => state.listNUmber);

  const dispath = useDispatch();

  return (
    <div>
      <h2>
        ListNumber: [
        {listNum.map((el, index) => {
          if (index === listNum.length - 1) {
            return `${el} `;
          } else {
            return `${el}, `;
          }
        })}
        ]
      </h2>
      <button onClick={() => dispath(randomListNumber())}>Random Number</button>
    </div>
  );
}
