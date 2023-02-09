import React from "react";
import ListRender from "./ListRender";

export default function Next(props) {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    const diffTime = task.date - date;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 7 && diffDays >= 0) {
      return true;
    }
    return false;
  });
  return (
    <div>
      <h4>Pending Tasks of next 7 days : </h4>
      <br />
      <ListRender list={filteredList} />
    </div>
  );
}
