import React from "react";

import { VscChevronRight } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";

import Button from "./../components/Button";
import { StButtons } from "../styles/theme";

const onClickPrimaryButtonHandler = () => {
  alert("버튼을 만들어보세요!");
};

const onClickNagativeButtonHandler = () => {
  prompt("어렵나요?", "네");
};

export default function ButtonContainer() {
  return (
    <section>
      <StButtons>
        <Button
          onClick={onClickPrimaryButtonHandler}
          color="#55efc4"
          type="P"
          icon={<VscChevronRight />}
        >
          Large Primary Button
        </Button>
        <Button color="#55efc4" type="M">
          Medium
        </Button>
        <Button color="#55efc4" type="S">
          Small
        </Button>
      </StButtons>
      <StButtons>
        <Button
          onClick={onClickNagativeButtonHandler}
          color="#FAB1A0"
          type="P"
          icon={<VscBellDot />}
          fc="#D63031"
        >
          Large Nagative Button
        </Button>
        <Button color="#FAB1A0" type="M" fc="#D63031">
          Medium
        </Button>
        <Button color="#FAB1A0" type="S" fc="#D63031">
          Small
        </Button>
      </StButtons>
    </section>
  );
}
