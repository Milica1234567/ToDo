import React from "react";
import Mod from "./Modal";
import { useState, useEffect } from "react";
import TodoItem from "./ToDoItemNew";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { json } from "react-router-dom";
import axios from "axios";

const ToDoWeekly = ({ logUser }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const t = JSON.parse(localStorage.getItem("tasks"));
    if (t) {
      /*localStorage.setItem('tasks', JSON.stringify(tasks));*/
      //console.log(t);
      /*console.log('///////');*/
      //console.log(localStorage.getItem('tasks', JSON.stringify(tasks)));
      setTasks(t);
      //console.log(tasks.length)
    }
  }, []);

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(logUser);
  });

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }



  return (
    <div className="container-todo">
      <div className="container-left">
        <div className="upper-left">
          <div className="user-content">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            {console.log("999"+JSON.stringify(logUser))}
            <h3>{user["username"]}</h3>
          </div>
          <div className="user-calendar">
            <FontAwesomeIcon className="list-icon" icon={faList} />
            <p>To Do List</p>
          </div>
        </div>

        <div className="bottom-left">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </div>

      <div className="container-right">
        <div className="upper-right">
          <Mod passTask={tasks} setPassTask={setTasks} />
        </div>

        <div className="days-container">
          {days.map((day) => (
            <div className="day"> {day} </div>
          ))}
          {days.map((day) => (
            <div>
              {tasks
                .filter((task) => task.day.includes(day))
                .map((filteredTask) => (
                  <div>
                    <TodoItem
                      key={filteredTask.id}
                      task={filteredTask}
                      deleteTask={deleteTask}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/*tasks.filter(task => task["day"] === day).map((filteredTask)=>(<li>{filteredTask}</li>))
    {tasks.filter(task=>task.day.includes("Monday")).map((filteredTask)=>(<p>{JSON.stringify(filteredTasks)}</p>))}
    {days.map((day)=>tasks.filter(task=>task.day === "Monday").map((filteredTask)=>(<li>{filteredTask}</li>)))}
    */}

      {/*tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    />
    ))*/}

      {/*
    { 
        days.map((day)=>
        <div> 
            {tasks.filter(task=>task.day.includes(day)).map((filteredTask)=>(
            <div>
                <TodoItem
                    key={filteredTask.id} 
                    task={filteredTask}
                    deleteTask={deleteTask}
                    />
            </div>))}
        </div>)
       
        }
    */}
    </div>
  );
};

export default ToDoWeekly;
