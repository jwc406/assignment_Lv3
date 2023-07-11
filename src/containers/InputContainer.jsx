import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

import Button from "../components/Button";

export default function InputContainer() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangePriceHandler = (e) => {
    const removedNum = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 들어오도록 함
    let TransPrice = (+removedNum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3글자마다 ,을 추가
    setPrice(TransPrice);
  };

  const onClickSaveButttonHandler = () => {
    name && price
      ? alert(`{ name: ${name}, price: ${price} }`)
      : alert("둘 다 입력해주세요!");
  };

  return (
    <section>
      <h1>Input</h1>
      <FormBox>
        <InputBox>
          <p>이름</p>
          <input
            type="text"
            onChange={(e) => onChangeNameHandler(e)}
            value={name}
          />
        </InputBox>
        <InputBox>
          <p>가격</p>
          <input
            type="text"
            onChange={(e) => onChangePriceHandler(e)}
            value={price}
          />
        </InputBox>
        <Button onClick={onClickSaveButttonHandler} type="Basic" size="S">
          저장
        </Button>
      </FormBox>
    </section>
  );
}

const FormBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & input {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
  }
`;
