import React from "react";
import { styled } from "styled-components";

import Select from "../components/Select";

export default function SelectContainer() {
  return (
    <StSectionContainer>
      <h1>Modal</h1>
      <Select />
    </StSectionContainer>
  );
}

const StSectionContainer = styled.div`
  border: 3px solid #dddddd;
  margin-top: 50px;
  height: 200px;
  overflow: hidden;
`;
