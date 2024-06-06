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

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const LogoStyle = styled.img`
  height: 50px;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const HeadText = styled.div`
  font-size: 16px;
  margin: 0 0 10px 0;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const InputWrapperStyle = styled.div`
  margin-top: 6px;
`;

const Text = styled.div`
  @media print {
    visibility: hidden;
    display: block !important;
  }
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
      <FlexContainer justify="space-between">
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
          <Text>Главна книга бр.</Text>
          <Input
            type="text"
            name="bookNum"
            value={formData.bookNum}
            separatorWidth="100%"
            onChange={handleChange}
            textAlign="center"
          />
          <Text>/20</Text>
          <Input
            type="text"
            name="year"
            value={formData.year}
            separatorWidth="100%"
            inputWidth="5%"
            onChange={handleChange}
          />
          <Text>година</Text>
        </FlexContainer>
      </FlexContainer>
    </HeaderStyle>
  );
};
