// App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Math.random(),
        text: inputValue.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdate = (id, updatedText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container-fluid">
      <h1 className='display-4 text-center bg-light text-dark'>To-Do List</h1>
      <div className='row'>
        <div className='col-md text-center'>
          <input
            className='form-control form-control-lg'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary mt-4" type='button' onClick={handleAddTodo}>Add</button>
          </div>

        </div>
      
        <div className='col-md text-center mt-1'>
        <TodoList todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
        </div>
  </div>
  );
};

export default App;
