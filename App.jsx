import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="h-screen flex justify-center items-start bg-gray-100">
  <div className="bg-white p-8 rounded shadow-lg w-96 mt-20">
    <Header />
    <ToDoList
      tasks={tasks}
      addTask={addTask}
      deleteTask={deleteTask}
      toggleComplete={toggleComplete}
      editTask={editTask}
    />
  </div>
</div>

  );
}

export default App;
