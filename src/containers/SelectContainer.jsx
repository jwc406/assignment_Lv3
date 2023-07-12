import React, { useState } from "react";
import { styled } from "styled-components";

import Select from "../components/Select";

export default function SelectContainer() {
  const [selectedOptions, setSelectedOptions] = useState({
    0: "react",
    1: "react",
  });
  // select 컴포넌트 각각의 id를 설정, 옵션 초기값 react

  // setState에 콜백함수를 사용하면 이전의 state값을 사용 가능
  const handleOptionChange = (id, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions, // 이전 state 값을 복사
      [id]: option.value, // 변경된 id에 맞는 옵션 값을 업데이트
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
