import React from "react";
import { useRef, useEffect } from "react";
import { styled } from "styled-components";

import Button from "./Button";

import { StButtons } from "../styles/theme";

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
    <StModal ref={modalRef} id={id}>
      {id === 0 ? (
        <>
          <p>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <StModalButtons>
            <Button onClick={closeModal} color="#FAB1A0" type="S" fc="#D63031">
              닫기
            </Button>
            <Button color="#55efc4" type="S">
              확인
            </Button>
          </StModalButtons>
        </>
      ) : (
        <>
          <p>
            닫기 버튼 1개가 있고, <br />
            외부 영역을 누르면 모달이 닫혀요.
          </p>
          <StCloseButton onClick={closeModal}>X</StCloseButton>
        </>
      )}
    </StModal>
  );
}

const StModal = styled.div`
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

const StModalButtons = styled(StButtons)`
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const StCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
`;
