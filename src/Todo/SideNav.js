import React from "react";

export default function SideNav(props) {
  return (
    <span>
      <div
        style={{ marginLeft: "8rem" }}
        onClick={() => {
          props.change("INBOX");
        }}
      >
        <button className="btn btn-primary">INBOX</button>
      </div>
      <div
        style={{ marginLeft: "8rem", marginTop: "0.2rem" }}
        onClick={() => {
          props.change("TODAY");
        }}
      >
        <button className="btn btn-primary">TODAY</button>
      </div>
      <div
        style={{ marginLeft: "6.6rem", marginTop: "0.2rem" }}
        onClick={() => {
          props.change("NEXT");
        }}
      >
        <button className="btn btn-primary">NEXT 7 DAYS</button>
      </div>
    </span>
  );
}
