import styled from "styled-components";

const CustomButton = styled.button`
  border: none;
  background: #538392;
  color: #ffff;
  padding: 12px;
  border-radius: 8px;
  width: 150px;
  cursor: pointer;

  &:hover {
    background: #6295a2;
  }
`;

export const Button = ({ onClick, children }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};
