import React from "react";

const Button = ({ title, color, borderRadius, width, height, onClick}) => {
  return <button onClick={onClick} style={{ background: color, borderRadius,width, height}}>{title}</button>;
};

export default Button;
