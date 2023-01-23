import React from "react";
import styled from "styled-components";

const Button = ({ title, color, borderRadius, width, height, onClick}) => {
  return <StyledButton onClick={onClick} style={{ background: color, borderRadius,width, height}}>{title}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
 border: none;
 width: 90px;
 height: 30px;
 color: white;
 border-radius: 10px;
 margin-right: 10px;
  
 `