import "./App.css";
import Todo from "./features/todo/Todo";

// B1: Xay dung giao dien
// B2: Xay dung store
//    B2.1: Xay dung state ( kieu du lieu + gia tri khoi tao)
//    B2.2: Xay dung slice ( state, action, reducer) (createSlice)
//    B2.3: Xay dung store  (configureStore)
// B3: Lay du lieu tu store (useSelector)

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
