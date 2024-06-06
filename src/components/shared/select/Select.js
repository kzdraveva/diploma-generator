import styled, { css } from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.inputWidth || ""};
`;

const StyledSelect = styled.select`
  background-color: #eeeeee;
  border: none;
  box-sizing: border-box;
  width: ${(props) => props.separatorWidth || "25%"};
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
  width: ${(props) => props.separatorWidth || "25%"};
  margin-bottom: ${(props) => (props.hasDescription ? "0" : "10px")};
`;

const DescriptionStyle = styled.div`
  font-size: 13px;
  margin-bottom: ${(props) => (props.hasDescription ? "10px" : "0")};
  text-align: center;
`;

export const Select = ({
  name,
  value,
  customStyle,
  separatorWidth,
  inputWidth,
  description,
  onChange,
  options,
}) => {
  return (
    <SelectContainer inputWidth={inputWidth}>
      <StyledSelect
        name={name}
        value={value || ""}
        customStyles={customStyle}
        separatorWidth={separatorWidth}
        onChange={(e) => onChange(e, name)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <SeparatorLine
        separatorWidth={separatorWidth}
        hasDescription={description}
      />
      {description && (
        <DescriptionStyle
          hasDescription={true}
        >{`(${description})`}</DescriptionStyle>
      )}
    </SelectContainer>
  );
};
