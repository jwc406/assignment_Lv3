import React from "react";
import { useRef, useEffect } from "react";
import { styled } from "styled-components";

export default function Modal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef(null); // eslint-disable-line

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <StModal ref={modalRef}>
      <button onClick={closeModal}>X</button>
      <p>모달창입니다.</p>
    </StModal>
  );
}

const StModal = styled.div`
  width: 300px;
  height: 200px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;

  & button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
