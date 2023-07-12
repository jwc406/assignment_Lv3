import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

import Button from "../components/Button";
import { size, type } from "../utils/buttonStyle";

export default function InputContainer() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    const removedNum = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 들어오도록 함
    let TransPrice = (+removedNum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3글자마다 ,을 추가
    setPrice(TransPrice);
  };

  const onClickSaveButtton = () => {
    name && price !== "0"
      ? alert(`{ name: ${name}, price: ${price.replace(/,/g, "")} }`)
      : alert("둘 다 입력해주세요!");
  };

  return (
    <section>
      <h1>Input</h1>
      <InputBoxRow>
        <InputBox>
          <p>이름</p>
          <input type="text" onChange={onChangeName} value={name} />
        </InputBox>
        <InputBox>
          <p>가격</p>
          <input type="text" onChange={onChangePrice} value={price} />
        </InputBox>
        <Button onClick={onClickSaveButtton} size={size[2]} type={type[0]}>
          저장
        </Button>
      </InputBoxRow>
    </section>
  );
}

const InputBoxRow = styled.div`
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
