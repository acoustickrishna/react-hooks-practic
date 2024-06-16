import React, { useState } from "react";

function ColorBoxInteraction() {
  const [boxes, setBoxes] = useState([
    {
      name: "box1",
      color: "blue",
      height: 300,
      width: 300,
      border: "1px solid",
    },
    {
      name: "box2",
      color: "blue",
      height: 300,
      width: 300,
      border: "1px solid",
    },
    {
      name: "box3",
      color: "blue",
      height: 300,
      width: 300,
      border: "1px solid",
    },
  ]);

  const matchText = {
    box1: "box2box3",
    box2: "box1box3",
    box3: "box2box1",
  };

  const onDivClick = (name) => {
    const newBoxes = [...boxes];
    const filterNonMatch = newBoxes.find((s) => s.name !== name);
    const newData = newBoxes.find((s) => s.name === name);
    const data = [
      { ...newData },
      {
        ...filterNonMatch,
        name: matchText[newData.name],
        color: "blue",
        height: 300,
        width: 600,
        border: "1px solid",
      },
    ];
    setBoxes(data);
  };
  return (
    <div style={{ display: "flex" }}>
      {boxes.map((s) => {
        return (
          <div
            style={{
              height: s.height,
              width: s.width,
              border: s.border,
              background: s.color,
              color: "white",
            }}
            onClick={() => onDivClick(s.name)}
          >
            {s.name}
          </div>
        );
      })}
    </div>
  );
}

export default ColorBoxInteraction;
