import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, addTask, deleteTask, toggleComplete, editTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
