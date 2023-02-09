import React from "react";

export default function ListRender(props) {
  return (
    <div>
      <div>
        {props.list.map((list) => {
          return (
            <div>
              <div>
                <li style={{color: "brown"}} type="square">
                  {list.title} ({list.date.toLocaleString()})
                </li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
