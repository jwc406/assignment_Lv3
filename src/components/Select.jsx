import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { VscTriangleDown } from "react-icons/vsc";

export default function Select({ id, selectedOption, onOptionChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: "react", name: "리액트" },
    { value: "Java", name: "자바" },
    { value: "Spring", name: "스프링" },
    { value: "reactNative", name: "리액트네이티브" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionChange = (option) => {
    onOptionChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <StSelectContainer id={id} ref={dropdownRef}>
      <StSelectedOption onClick={toggleDropdown}>
        {selectedOption
          ? options.find((option) => option.value === selectedOption).name
          : options[0].name}
        <StDropdownIcon>
          <VscTriangleDown />
        </StDropdownIcon>
      </StSelectedOption>
      {isOpen && (
        <StOptionsList>
          {options.map((option) => (
            <StOptionItem
              key={option.value}
              onClick={() => handleOptionChange(option)}
            >
              {option.name}
            </StOptionItem>
          ))}
        </StOptionsList>
      )}
    </StSelectContainer>
  );
}

const StSelectContainer = styled.div`
  position: relative;
`;

const StSelectedOption = styled.div`
  width: 300px;
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const StDropdownIcon = styled.div`
  pointer-events: none;
`;

const StOptionsList = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 10px;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const StOptionItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
