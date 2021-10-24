import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoItem } from '../TodoList/TodoItem/index';
import { addTodo } from './todosSlice';

//css file
import './index.css';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todosList);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTodos = () => {
    if (inputValue !== '') {
      dispatch(addTodo({ title: inputValue, isCompleted: false }));
      setInputValue('');
    } else return;
  };
  const addTodoEnter = (e) => {
    if (inputValue !== '' && e.key === 'Enter') {
      console.log('inputValue: ', inputValue);
      dispatch(addTodo({ title: inputValue, isCompleted: false }));
      setInputValue('');
    }
  };

  return (
    <div className='todo-list'>
      <header className='todos-list__header'>
        <h1 className='header__title'>work to-dos</h1>
        <p className='header__title--add sub__title'>
          Enter text into the input field to add items to your list.
        </p>
        <p className='header__title--completed sub__title'>
          Click the item to mark it as complete.
        </p>
        <p className='header__title--remove sub__title'>
          Click the "X" to remove the item from your list.
        </p>
      </header>
      <div className='todos-list__content'>
        <div className='todos__input'>
          <input
            className='todos__input--input'
            type='text'
            placeholder='New item...'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={addTodoEnter}
          ></input>
          <button className='todos__input--btn' onClick={addTodos}>
            Add
          </button>
        </div>
        <div className='todos__list'>
          {todos.map((todo) => (
            <TodoItem todoItem={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
