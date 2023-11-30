// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
