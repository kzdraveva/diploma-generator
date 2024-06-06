import styled from "styled-components";
import Logo from "../../../../assets/logo.svg";
import { Input } from "../../../shared/input/Input";
import { FlexContainer } from "../../../shared/flexContainer/FlexContainer";

const HeaderStyle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;

const SeparatorLine = styled.div`
  height: 2px;
  background: #000;
  width: 100%;
`;

const LogoStyle = styled.img`
  width: 45px;
`;

const HeadText = styled.div`
  font-size: 16px;
  margin: 8px 0;
`;

const InputWrapperStyle = styled.div`
  margin-top: 10px;
`;
const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DiplomaHeader = ({ formData, handleChange }) => {
  return (
    <HeaderStyle>
      <LogoStyle src={Logo} alt="Logo" />
      <HeadText> РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА</HeadText>
      <SeparatorLine />
      <InputWrapperStyle>
        <Input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          separatorWidth="100%"
          description="име на основното училиште и место"
          textAlign="center"
        />
      </InputWrapperStyle>
      <InputsWrapper>
        <Input
          type="text"
          name="municipality"
          value={formData.municipality}
          onChange={handleChange}
          description="општина"
          separatorWidth="100%"
          textAlign="center"
        />
        <FlexContainer gap="5px" justify="flex-end">
          Главна книга бр.
          <Input
            type="text"
            name="bookNum"
            value={formData.bookNum}
            separatorWidth="100%"
            onChange={handleChange}
            textAlign="center"
          />
          /20
          <Input
            type="text"
            name="year"
            value={formData.year}
            separatorWidth="100%"
            inputWidth="5%"
            onChange={handleChange}
          />
          година
        </FlexContainer>
      </InputsWrapper>
    </HeaderStyle>
  );
};
