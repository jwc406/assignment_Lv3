import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

import Button from "../components/Button";
import Modal from "../components/Modal";

import { ButtonRow } from "../styles/theme";

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
      <ButtonRow>
        <Button onClick={() => onClickOpenHandler(0)} type="Basic" size="S">
          open modal
        </Button>
        {modalOpen[0] && (
          <>
            <Modal id={0} setModalOpen={setModalOpen} />
            <ModalBgBox />
          </>
        )}
        <Button
          onClick={() => onClickOpenHandler(1)}
          type="Nagative"
          size="P"
          color="#FAB1A0"
        >
          open modal
        </Button>
        {modalOpen[1] && (
          <>
            <Modal id={1} setModalOpen={setModalOpen} />
            <ModalBgBox />
          </>
        )}
      </ButtonRow>
    </section>
  );
}

const ModalBgBox = styled.div`
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
