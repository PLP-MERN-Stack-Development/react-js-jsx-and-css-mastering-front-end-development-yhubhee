// src/components/TaskManager.jsx
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/uselocalstorage";
import Button from "./button";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4"> Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2 text-gray-800"
          placeholder="Enter a new task..."
        />
        <Button variant="primary" onClick={addTask}>
          Add
        </Button>
      </div>

      <div className="flex justify-between mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>
          Completed
        </Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 && <p className="text-gray-500">No tasks found.</p>}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border rounded px-3 py-2"
          >
            <span
              onClick={() => toggleComplete(task.id)}
              className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
