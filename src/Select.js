import React from "react";

export default function Select() {
  const options = [
    {
      title: "RUS",
      value: "ru",
      img: "🇷🇺",
      action: () => {
        console.log("RUSKA");
      },
    },
    {
      title: "ENG",
      value: "en",
      img: "🇺🇸",
      action: () => {
        console.log("Amerika");
      },
    },
  ];
  return (
    <div>
      <select
        onChange={(e) => {
          options.find((op) => op.value === e.target.value).action();
        }}
        className="select"
      >
        {options.map((op) => (
          <option key={op.value} className="option" value={op.value}>
            {op.img}
          </option>
        ))}
      </select>
    </div>
  );
}
