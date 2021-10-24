import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/TodoList/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
