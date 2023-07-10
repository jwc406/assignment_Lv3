import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

import Button from "../components/Button";
import Modal from "../components/Modal";

import { StButtons } from "../styles/theme";

export default function ModalContainer() {
  const [modalOpen, setModalOpen] = useState({ 0: false, 1: false });

  const onClickOpenHandler = (id) => {
    setModalOpen((prevModalOpen) => ({
      ...prevModalOpen,
      [id]: !prevModalOpen[id],
    }));
  };

  return (
    <section>
      <h1>Modal</h1>
      <StButtons>
        <Button onClick={() => onClickOpenHandler(0)} color="#55efc4" type="S">
          open modal
        </Button>
        {modalOpen[0] && (
          <>
            <Modal id={0} setModalOpen={setModalOpen} />
            <StModalBg />
          </>
        )}

        <Button
          onClick={() => onClickOpenHandler(1)}
          color="#FAB1A0"
          type="P"
          fc="#D63031"
        >
          open modal
        </Button>
        {modalOpen[1] && (
          <>
            <Modal id={1} setModalOpen={setModalOpen} />
            <StModalBg />
          </>
        )}
      </StButtons>
    </section>
  );
}

const StModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #c7c7c7b0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;
