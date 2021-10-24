import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todosList: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      action.payload = { ...action.payload, id: state.todosList.length + 1 };
      state.todosList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const removeIndex = state.todosList.findIndex(
        (t) => t.id === action.payload
      );
      state.todosList.splice(removeIndex, 1);
    },
    markCompleted: (state, action) => {
      const markCompletedIndex = state.todosList.findIndex(
        (t) => t.id === action.payload
      );
      state.todosList[markCompletedIndex].isCompleted =
        !state.todosList[markCompletedIndex].isCompleted;
    },
  },
});

export const { addTodo, removeTodo, markCompleted } = todosSlice.actions;

export default todosSlice.reducer;
