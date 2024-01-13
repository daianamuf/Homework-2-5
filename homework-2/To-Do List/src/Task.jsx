import { useState } from "react";

/* eslint-disable react/prop-types */
function Task({ task, onDeleteTask, onToggleTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      onEditTask(task.id, editedDescription);
    }
    setIsEditing(!isEditing);
  };
  return (
    <li>
      <input
        type="checkbox"
        value={task.done}
        onChange={() => onToggleTask(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span style={task.done ? { textDecoration: "line-through" } : {}}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}

export default Task;
