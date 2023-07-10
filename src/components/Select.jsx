import React from "react";
import { styled } from "styled-components";

import { VscTriangleDown } from "react-icons/vsc";

export default function Select() {
  const options = [
    { value: "react", name: "리액트" },
    { value: "Java", name: "자바" },
    { value: "Spring", name: "스프링" },
    { value: "reactNative", name: "리액트네이티브" },
  ];

  return (
    <StSelectBox name="Frameworks">
      <optgroup>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </optgroup>
      <StIconWrapper>
        <VscTriangleDown />
      </StIconWrapper>
    </StSelectBox>
  );
}

const StSelectBox = styled.select`
  width: 300px;
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  appearance: none;
`;

const StIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
