import styled, { css } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.inputWidth || ""};
`;

const StyledInput = styled.input`
  //background-color: #eeeeee;
  border: none;
  box-sizing: border-box;
  width: ${(props) => props.separatorWidth || "20%"};
  text-align: ${(props) => props.textAlign || "left"};

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
  margin-bottom: ${(props) => (props.hasDescription ? "0" : "10px")};

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const DescriptionStyle = styled.div`
  font-size: 10px;
  text-align: center;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

export const Input = ({
  type,
  name,
  value,
  customStyle,
  separatorWidth,
  inputWidth,
  description,
  textAlign,
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
        textAlign={textAlign}
      />
      <SeparatorLine
        separatorWidth={separatorWidth}
        hasDescription={description}
      />
      {description && (
        <DescriptionStyle
          hasDescription={true}
        >{`(${description})`}</DescriptionStyle>
      )}
    </InputContainer>
  );
};
