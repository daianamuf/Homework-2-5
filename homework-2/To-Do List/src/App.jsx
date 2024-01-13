import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const savedTasks = JSON.parse(sessionStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(savedTasks);

  const handleAddTasks = (task) => {
    setTasks((tasks) => [...tasks, task]);
  };

  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  const handleEditTask = (id, newDescription) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (confirmed) setTasks([]);
  };

  const handleSaveList = () => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Tasks saved successfully!");
  };

  return (
    <div className="app">
      <h1 className="heading">TaskMaster</h1>
      <Form onAddTasks={handleAddTasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onEditTask={handleEditTask}
        onClearList={handleClearList}
        onSaveList={handleSaveList}
      />
    </div>
  );
}

export default App;
