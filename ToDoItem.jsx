import React, { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border rounded px-1"
          />
        ) : (
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-500 mr-2">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">
            Edit
          </button>
        )}
        <button onClick={() => deleteTask(task.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
