import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import { changeMode } from "./changeModeSlice";

export default function ChangeMode() {
  const { modeColumn } = useSelector((state: RootState) => state.changeMode);

  const dispath = useDispatch();

  return (
    <div className="change-mode">
      <button onClick={() => dispath(changeMode())}>List Mode</button>

      <div className={modeColumn ? "list display-column" : "list display-row"}>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
      </div>
    </div>
  );
}
