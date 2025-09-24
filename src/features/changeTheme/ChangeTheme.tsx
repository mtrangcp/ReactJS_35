import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import { changeTheme } from "./changThemeSlice";

export default function ChangeTheme() {
  const { light } = useSelector((state: RootState) => state.changeTheme);

  const dispath = useDispatch();

  return (
    <div className={light ? "bg-light bg" : "bg-dark bg"}>
      <button onClick={() => dispath(changeTheme())}>
        ChangeTheme: {light ? "LIGHT" : "DARK"}
      </button>
    </div>
  );
}
