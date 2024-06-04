import styled, { css } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.inputWidth || ""};
`;

const StyledInput = styled.input`
  background-color: #eeeeee;
  border: none;
  box-sizing: border-box;
  width: ${(props) => props.separatorWidth || "20%"};
  text-align: center;

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

const SeparatorLine = styled.div`
  height: 1px;
  background: #000;
  width: ${(props) => props.separatorWidth || "20%"};
  margin-bottom: 10px;
`;

const DescriptionStyle = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Input = ({
  type,
  name,
  value,
  customStyle,
  separatorWidth,
  inputWidth,
  description,
  onChange,
}) => {
  return (
    <InputContainer inputWidth={inputWidth}>
      <StyledInput
        type={type}
        name={name}
        value={value}
        customStyles={customStyle}
        separatorWidth={separatorWidth}
        onChange={onChange}
      />
      <SeparatorLine separatorWidth={separatorWidth} />
      {description && <DescriptionStyle>{`(${description})`}</DescriptionStyle>}
    </InputContainer>
  );
};
