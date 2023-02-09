import React from "react";

export default function App(props) {
  return (
    <div
      className="text-center"
      style={{
        width: "35rem",
        backgroundColor: "rgb(134, 225, 240)",
        margin: "0.2rem 25rem",
        color: "white"
      }}
    >
      <h3>{props.name ? `Welcome ${props.name}` : "Login please"}</h3>
      <h3>
        {props.email ? `You are logged in as ${props.email}` : "Login please"}
      </h3>
    </div>
  );
}
