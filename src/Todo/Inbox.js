import React, { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";

export default function INBOX(props) {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef("");
  const calendarRef = useRef("");
  const newTaskHandler = () => {
    setNewTask(true);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Please type something to add!");
      return;
    }
    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value),
    };
    props.append(newObj);
    setNewTask(false);
  };

  const cancelHandler = () => {
    setNewTask(false);
    calendarRef.current.focus();
    calendarRef.current.blur();
  };

  const deleteHandler = () => {};

  return (
    <div>
      <div className="text-center">
        <h4 style={{ color: "red" }}>INBOX</h4>
        {!newTask && (
          <button
            style={{ marginBottom: "0.4rem" }}
            className="btn btn-success"
            onClick={newTaskHandler}
          >
            Add Task
          </button>
        )}
        {newTask && (
          <form action="">
            <input
              placeholder="Type something..."
              style={{ border: "5px solid brown", borderRadius: "7px" }}
              type="text"
              name=""
              id=""
              ref={titleRef}
            />
            <div style={{ marginTop: "1rem" }}>
              <button className="btn btn-success" onClick={addHandler}>
                Add Task
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-secondary" onClick={cancelHandler}>
                Cancel
              </button>
              &nbsp;&nbsp;
              <input
                style={{ border: "5px solid green", borderRadius: "7px" }}
                type="date"
                name=""
                id=""
                ref={calendarRef}
                defaultValue="2023-01-01"
              />
            </div>
          </form>
        )}
      </div>
      <div className="ayam">
        {props.list.map((list, index) => {
          return (
            <div key={list.number}>
              <div style={{ marginTop: "1.5rem" }}>
                <ul type="square">
                  <h6>
                    <li>
                      {list.title} ({list.date.toLocaleDateString()})
                      <button
                        style={{ float: "right" }}
                        onClick={deleteHandler}
                      >
                        <FaTrash />
                      </button>
                    </li>
                  </h6>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
