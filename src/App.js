import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [task, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <TaskList
          title="Pendente:"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={task.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          deleteTask={deleteTask}
        />
        <TaskList
          title="Fazendo:"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={task.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          deleteTask={deleteTask}
        />
        <TaskList
          title="Completo:"
          onAddTask={addTask}
          taskState="Completo"
          tasks={task.filter((t) => t.state === "Completo")}
          onTaskUpdate={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
