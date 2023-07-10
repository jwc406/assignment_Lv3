import React from "react";
import { styled } from "styled-components";

export default function Button({ children, icon, ...rest }) {
  return (
    <StButton {...rest}>
      {children}
      {icon}
    </StButton>
  );
}

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  svg {
    font-size: 15px;
  }

  &:active {
    filter: brightness(90%);
  }

  ${({ color, type }) => {
    switch (type) {
      case "P":
        return `
          height: 50px;
          width: 200px;
          border: 3px solid ${color};
          font-weight: 700;
        `;
      case "M":
        return `
          height: 45px;
          width: 130px;
          background: ${color}
        `;
      case "S":
        return `
          height: 40px;
          width: 100px;
          background: ${color}
        `;
      default:
        return `
          height: 40px;
          width: 100px;
        `;
    }
  }};

  ${({ fc }) => {
    return fc ? `color: #D63031;` : `color:black;`;
  }};
`;
