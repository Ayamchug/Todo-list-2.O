import React, { useState } from "react";
import Inbox from "./Inbox";
import Today from "./Today";
import Next from "./Next";

const list = [];
export default function MainSection(props) {
  const [filteredData, setFilteredData] = useState(list);
  const addToList = (obj) => {
    list.push(obj);
    setFilteredData(list);
  };
  return (
    <section className="section-center">
      <div>
      {props.active === "INBOX" && (
        <Inbox list={filteredData} append={addToList} />
      )}
      {props.active === "TODAY" && <Today list={filteredData} />}
      {props.active === "NEXT" && <Next list={filteredData} />}
    </div>
    </section>
  );
}
