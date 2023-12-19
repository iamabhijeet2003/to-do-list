// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDelete, handleUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default TodoList;
