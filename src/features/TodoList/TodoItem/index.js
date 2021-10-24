import React from 'react';
import './index.css';
import { removeTodo, markCompleted } from '../../TodoList/todosSlice';
import { useDispatch } from 'react-redux';

export const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const getProps = () => {
    dispatch(removeTodo(todoItem.id));
  };
  const markComplete = () => {
    dispatch(markCompleted(todoItem.id));
  };
  return (
    <div className='todos__list--item'>
      <span
        onClick={markComplete}
        className={todoItem.isCompleted ? 'completed' : ''}
      >
        {todoItem.title}
      </span>
      <button className='item__btn' onClick={getProps}>
        X
      </button>
    </div>
  );
};
