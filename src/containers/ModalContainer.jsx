import React from "react";
import { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";

import { StButtons } from "../styles/theme";

export default function ModalContainer() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickOpenHandler = () => {
    setModalOpen(true);
  };

  return (
    <section>
      <StButtons>
        <Button onClick={onClickOpenHandler} color="#55efc4" type="S">
          open modal
        </Button>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
        <Button
          // onClick={}
          color="#FAB1A0"
          type="P"
          fc="#D63031"
        >
          open modal
        </Button>
      </StButtons>
    </section>
  );
}
