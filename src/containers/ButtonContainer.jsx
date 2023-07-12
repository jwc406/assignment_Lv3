import React from "react";

import { VscChevronRight } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";

import Button from "../components/Button";
import { ButtonRow } from "../styles/theme";
import { size, type } from "../utils/buttonStyle";

export default function ButtonContainer() {
  const onClickPrimaryButton = () => alert("버튼을 만들어보세요!");
  const onClickNagativeButton = () => prompt("어렵나요?", "네");

  return (
    <section>
      <h1>Button</h1>
      <ButtonRow>
        <Button
          onClick={onClickPrimaryButton}
          size={size[0]}
          type={type[0]}
          icon={<VscChevronRight />}
        >
          Large Primary Button
        </Button>
        <Button size={size[1]} type={type[0]}>
          Medium
        </Button>
        <Button size={size[2]} type={type[0]}>
          Small
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onClick={onClickNagativeButton}
          size={size[0]}
          type={type[1]}
          icon={<VscBellDot />}
        >
          Large Nagative Button
        </Button>
        <Button size={size[1]} type={type[1]}>
          Medium
        </Button>
        <Button size={size[2]} type={type[1]}>
          Small
        </Button>
      </ButtonRow>
    </section>
  );
}
