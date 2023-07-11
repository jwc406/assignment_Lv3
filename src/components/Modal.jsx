import React from "react";
import { useRef, useEffect } from "react";
import { styled } from "styled-components";

import Button from "./Button";
import { ButtonRow } from "../styles/theme";

export default function Modal({ id, setModalOpen }) {
  const closeModal = () => {
    setModalOpen(id, false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (id === 1 && modalRef.current && !modalRef.current.contains(e.target))
        setModalOpen(id, false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [id, setModalOpen]);

  return (
    <ModalBox ref={modalRef} id={id}>
      {id === 0 ? (
        <>
          <p>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <ModalButtonRow>
            <Button onClick={closeModal} type="Nagative" size="S">
              닫기
            </Button>
            <Button type="Basic" size="S">
              확인
            </Button>
          </ModalButtonRow>
        </>
      ) : (
        <>
          <p>
            닫기 버튼 1개가 있고, <br />
            외부 영역을 누르면 모달이 닫혀요.
          </p>
          <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        </>
      )}
    </ModalBox>
  );
}

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  background: white;
  border-radius: 10px;
  padding: 10px 30px;

  ${({ id }) => {
    switch (id) {
      case 0:
        return `
            width: 500px;
            height: 300px;
        `;
      case 1:
        return `
            width: 300px;
            height: 200px;
        `;
      default:
        return `
            width: 300px;
            height: 200px;
        `;
    }
  }};
`;

const ModalButtonRow = styled(ButtonRow)`
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const ModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
`;
