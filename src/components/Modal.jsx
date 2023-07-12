import React from "react";
import { useRef, useEffect } from "react";
import { styled } from "styled-components";

import Button from "./Button";
import { ButtonRow } from "../styles/theme";
import { size, type } from "../utils/buttonStyle";

export default function Modal({ id, setModalOpen }) {
  const closeModal = () => setModalOpen(id, false);

  const modalRef = useRef(null); // useRef로 null 초기값 지정

  useEffect(() => {
    // 마우스를 눌렀을 때 지정해준 핸들러 함수 실행
    // modalRef.current는 해당 요소를 의미
    // modalRef.current(ModalBox)에 mousedown한 요소가 포함되어있지 않다면 모달창 끄기
    const mousedownHandler = (e) => {
      if (id === 1 && modalRef.current && !modalRef.current.contains(e.target))
        setModalOpen(id, false);
    };

    document.addEventListener("mousedown", mousedownHandler);

    // 컴포넌트가 사라질 때 핸들러 함수 제거
    return () => {
      document.removeEventListener("mousedown", mousedownHandler);
    };
  }, [id, setModalOpen]); // id값, setModalOpen이 변경되었을 때만 콜백 함수 실행

  return (
    // 요소의 ref로 useRef 전달하여 modalRef로 해당 요소에 접근 가능
    <ModalBox ref={modalRef} id={id}>
      {id === 0 ? (
        <>
          <p>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <ModalButtonRow>
            <Button onClick={closeModal} type={type["N"]} size={size["S"]}>
              닫기
            </Button>
            <Button type={type["P"]} size={size["S"]}>
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
  ${({ id }) => idHandler(id)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  background: white;
  border-radius: 10px;
  padding: 10px 30px;
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

const idHandler = (id) => {
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
      return "";
  }
};
