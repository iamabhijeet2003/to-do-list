import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
    return (
      <div>
        <span>{todo.text}</span>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    );
};
  
export default TodoItem;