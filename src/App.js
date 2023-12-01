// App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

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
    <div className="container">
    <h1>To-Do List</h1>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
    <TodoList todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
  </div>
  );
};

export default App;
