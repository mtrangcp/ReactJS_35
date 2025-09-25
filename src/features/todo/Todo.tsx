import { useDispatch, useSelector } from "react-redux";
import type { AppDispath, RootState } from "../../stores/store";
import React, { useEffect, useState } from "react";
import { addTodo, delTodo, fetchData } from "./todoSlice";

// b1: qly gia tri input = state
// b2: tao thunk de xu ly tac vu add
// b3: gan thunk vao extraReducer
// b4: gan su kien cho btn add

export default function Todo() {
  const [inputTodo, setInputtodo] = useState("");
  const { todos, status, error } = useSelector(
    (state: RootState) => state.todo
  );

  const dispath = useDispatch<AppDispath>();

  useEffect(() => {
    dispath(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "rejected") {
    console.log(error);
  }

  const handleAdd = () => {
    dispath(
      addTodo({
        id: String(Date.now()),
        content: inputTodo,
        isDone: false,
      })
    );
  };

  const handleDel = (id: string) => {
    dispath(delTodo(id));
  };

  return (
    <div>
      <form className="todo" onSubmit={() => handleAdd()}>
        <input
          type="text"
          value={inputTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputtodo(e.target.value);
          }}
        />
        <button>Add</button>
      </form>

      {status === "pending" && <p>Dang tai du lieu</p>}
      <ul>
        {todos.map((el) => (
          <li key={el.id}>
            {el.content}
            <button onClick={() => handleDel(el.id)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
