import React from "react";

import { VscChevronRight } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";

import Button from "../components/Button";
import { ButtonRow } from "../styles/theme";

const onClickPrimaryButtonHandler = () => {
  alert("버튼을 만들어보세요!");
};

const onClickNagativeButtonHandler = () => {
  prompt("어렵나요?", "네");
};

export default function ButtonContainer() {
  return (
    <section>
      <h1>Button</h1>
      <ButtonRow>
        <Button
          onClick={onClickPrimaryButtonHandler}
          type="Basic"
          size="P"
          color="#55efc4"
          icon={<VscChevronRight />}
        >
          Large Primary Button
        </Button>
        <Button type="Basic" size="M">
          Medium
        </Button>
        <Button type="Basic" size="S">
          Small
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onClick={onClickNagativeButtonHandler}
          type="Nagative"
          size="P"
          color="#FAB1A0"
          icon={<VscBellDot />}
        >
          Large Nagative Button
        </Button>
        <Button type="Nagative" size="M">
          Medium
        </Button>
        <Button type="Nagative" size="S">
          Small
        </Button>
      </ButtonRow>
    </section>
  );
}
