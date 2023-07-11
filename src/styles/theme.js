import { styled } from "styled-components";

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StButton = styled.button`
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

  ${({ type }) => {
    switch (type) {
      case "Basic":
        return `
          background: #55efc4;
        `;
      case "Nagative":
        return `
          background: #FAB1A0;
          color: #D63031;
        `;
      default:
        return `
          color: black;
        `;
    }
  }};

  ${({ size, color }) => {
    switch (size) {
      case "P":
        return `
          height: 50px;
          width: 200px;
          font-weight: 700;
          background: white;
          border: 3px solid ${color}
        `;
      case "M":
        return `
          height: 45px;
          width: 130px;
        `;
      case "S":
        return `
          height: 40px;
          width: 100px;
        `;
      default:
        return `
          height: 40px;
          width: 100px;
        `;
    }
  }};
`;

//#FAB1A0" fontcolor="#D63031" "#55efc4"
