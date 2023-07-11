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
    <SelectSection>
      <h1>Select</h1>
      <SelectRow>
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
      </SelectRow>
    </SelectSection>
  );
}

const SelectSection = styled.section`
  border: 3px solid #dddddd;
  margin-top: 50px;
  height: 200px;
  overflow: hidden;
`;

const SelectRow = styled.div`
  display: flex;
  gap: 10px;
`;
