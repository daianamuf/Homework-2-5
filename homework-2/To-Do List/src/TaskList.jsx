/* eslint-disable react/prop-types */
import { useState } from "react";
import Task from "./Task";

function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
  onSaveList,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedTasks;

  if (sortBy === "input") {
    sortedTasks = tasks;
  } else if (sortBy === "description") {
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "done") {
    sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));
  }
  return (
    <section className="list">
      <ul>
        {sortedTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            onEditTask={onEditTask}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="done">Sort by completed status</option>
        </select>
        <button onClick={onSaveList}>Save List</button>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </section>
  );
}

export default TaskList;
