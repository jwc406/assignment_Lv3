import React, { useState } from "react";
import { styled } from "styled-components";

import Select from "../components/Select";

export default function SelectContainer() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (id, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [id]: option.value,
    }));
  };

  return (
    <StSectionContainer>
      <h1>Select</h1>
      <StSelectWrapper>
        <Select
          id={0}
          selectedOption={selectedOptions[0]}
          onOptionChange={(option) => handleOptionChange(0, option)}
        />
        <Select
          id={1}
          selectedOption={selectedOptions[1]}
          onOptionChange={(option) => handleOptionChange(1, option)}
        />
      </StSelectWrapper>
    </StSectionContainer>
  );
}

const StSectionContainer = styled.section`
  border: 3px solid #dddddd;
  margin: 50px 0;
  height: 200px;
  overflow: hidden;
`;

const StSelectWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
