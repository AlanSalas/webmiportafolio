import { useState } from "react";

const Avatar = ({ name }) => {
  const colors = [
    "rgb(170, 45, 64)",
    "rgb(152, 131, 219)",
    "rgb(4, 70, 106)",
    "rgb(241, 138, 179",
    "rgb(112, 147, 103)",
    "rgb(231, 54, 5)",
  ];

  const [color] = useState(colors[Math.floor(Math.random() * 6)]);

  return (
    <div className="avatar" style={{ backgroundColor: color }}>
      <span>{name.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default Avatar;
