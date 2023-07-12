import { styled } from "styled-components";

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StButton = styled.button`
  ${({ type }) => typeHandler(type)};
  ${({ size }) => sizeHandler(size)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  cursor: pointer;

  svg {
    font-size: 15px;
  }

  &:active {
    filter: brightness(90%);
  }
`;

const typeHandler = (type) => {
  switch (type) {
    case "primary":
      return `
        background: var(--basic-color);
        border: 3px solid var(--basic-color); 
      `;
    case "nagative":
      return `
        background: var(--nagative-color);
        border: 3px solid var(--nagative-color); 
        color: var(--nagative-fontColor);
      `;
    default:
      return "";
  }
};

const sizeHandler = (size) => {
  switch (size) {
    case "large":
      return `
        height: 50px;
        width: 200px;
        font-weight: 700;
        background: white;
      `;
    case "medium":
      return `
        height: 45px;
        width: 130px;
      `;
    case "small":
      return `
        height: 40px;
        width: 100px;
      `;
    default:
      return "";
  }
};

//#FAB1A0" "#D63031" "#55efc4"
