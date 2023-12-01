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
            type="text"
            value={updatedText}
            onChange={handleInputChange}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      <div>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button className='update-btn' onClick={handleEdit}>Edit</button>
            <button className='delete-btn' onClick={() => handleDelete(todo.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
    );
};
  
export default TodoItem;