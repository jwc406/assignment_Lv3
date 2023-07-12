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
          type={type["P"]}
          size={size["L"]}
          icon={<VscChevronRight />}
        >
          Large Primary Button
        </Button>
        <Button type={type["P"]} size={size["M"]}>
          Medium
        </Button>
        <Button type={type["P"]} size={size["S"]}>
          Small
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          onClick={onClickNagativeButton}
          type={type["N"]}
          size={size["L"]}
          icon={<VscBellDot />}
        >
          Large Nagative Button
        </Button>
        <Button type={type["N"]} size={size["M"]}>
          Medium
        </Button>
        <Button type={type["N"]} size={size["S"]}>
          Small
        </Button>
      </ButtonRow>
    </section>
  );
}
