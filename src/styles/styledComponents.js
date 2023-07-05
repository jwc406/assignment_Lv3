import styled from "styled-components";

export const BtSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
`;

export const PriButton = styled(Button)`
  width: 200px;
  height: 50px;
  background: none;
  font-weight: 700;
  border: 3px solid ${(props) => props.color};
  color: ${(props) => props.theme.color || "black"};
`;

export const LButton = styled(Button)`
  width: 150px;
  height: 45px;
  background: ${(props) => props.color};
  color: ${(props) => props.theme.color || "black"};
`;

export const SButton = styled(Button)`
  width: 100px;
  height: 40px;
  background: ${(props) => props.color};
  color: ${(props) => props.theme.color || "black"};
`;
