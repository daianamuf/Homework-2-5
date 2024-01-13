/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ onAddTasks }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newTask = { description, done: false, id: Date.now() };
    onAddTasks(newTask);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What&apos;s the next task on your list?</h3>

      <input
        type="text"
        placeholder="Meet with mom tomorrow"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add task</button>
    </form>
  );
}

export default Form;
