import React, { useState } from 'react';

const TodoItem = ({ todo, handleDelete, handleUpdate  }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleSave = () => {
    if (updatedText.trim() !== '') {
      handleUpdate(todo.id, updatedText);
      setIsEditing(false);
    }
  };
    return (
      <div className="todo-item">
        {isEditing ? (
          <input
            className='form-control form-control-lg'
            type="text"
            value={updatedText}
            onChange={handleInputChange}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      
      <div>
        {isEditing ? (
          <button className="btn btn-info" onClick={handleSave}>Save</button>
        ) : (
          <>
            <button className='btn btn-warning me-2' onClick={handleEdit}>Edit</button>
            <button className='btn btn-danger ms-2' onClick={() => handleDelete(todo.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
    );
};
  
export default TodoItem;