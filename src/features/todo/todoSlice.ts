import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const KEY_API = "http://localhost:8080/todos";

interface Todo {
  id: string;
  content: string;
  isDone: boolean;
}

interface TodoState {
  status: "idle" | "pending" | "fullfilled" | "rejected";
  todos: Todo[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

const initialState: TodoState = {
  status: "idle",
  todos: [],
  error: null,
};

export const fetchData = createAsyncThunk("todo/fetchData", async () => {
  try {
    const res = await axios.get(KEY_API);

    return res.data;
  } catch (error) {
    return error;
  }
});

export const addTodo = createAsyncThunk("todo/addTodo", async (data: Todo) => {
  try {
    const res = await axios.post(KEY_API, data);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const delTodo = createAsyncThunk("todo/delTodo", async (id: string) => {
  try {
    const res = await axios.delete(`${KEY_API}/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.todos = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      // add
      .addCase(addTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      //del
      .addCase(delTodo.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.todos = state.todos.filter((el) => el.id !== action.payload.id);
      });
  },
});

export default todoSlice.reducer;
