import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.inputWidth || ""};
`;

const StyledSelect = styled.select`
  //background-color: #eeeeee;
  border: none;
  box-sizing: border-box;
  width: ${(props) => props.separatorWidth || "25%"};
  text-align: center;

  @media print {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
  }
`;

const SeparatorLine = styled.div`
  height: 1px;
  background: #000;
  width: ${(props) => props.separatorWidth || "25%"};
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

export const Select = ({
  name,
  value,
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
