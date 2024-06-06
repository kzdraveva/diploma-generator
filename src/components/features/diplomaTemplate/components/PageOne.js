import styled from "styled-components";
import { Input } from "../../../shared/input/Input";
import { DiplomaHeader } from "../components/DiplomaHeader";
import { SubjectEntry } from "../components/SubjectEntry";
import { Select } from "../../../shared/select/Select";
import { SchoolYears } from "../../../shared/constants/SchoolYears";
import { MandatorySubjects } from "../../../shared/constants/Subjects";
import { FlexContainer } from "../../../shared/flexContainer/FlexContainer";

const SeparatorLine = styled.div`
  height: 1px;
  background: #000;
  width: 100%;
  margin: 20px 0 10px 0;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const MainText = styled.div`
  font-weight: bold;
  font-size: 20px;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const SubjectsInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
`;

const Subjects = styled.div`
  width: 50%;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const GradeText = styled.div`
  width: 35%;
  text-align: center;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const GradeNumber = styled.div`
  width: 15%;
`;

const Text = styled.div`
  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

export const PageOne = ({ formData, handleChange, handleSubjectChange }) => {
  return (
    <>
      <DiplomaHeader formData={formData} handleChange={handleChange} />
      <MainText>СВИДЕТЕЛСТВО</MainText>
      <FlexContainer justify="center" gap="5px" margin="5px 0 0 0">
        <Text>за успехот во</Text>
        <Select
          name="schoolYear"
          value={formData.schoolYear}
          options={SchoolYears}
          onChange={handleChange}
          description={"со римски број и со букви"}
          separatorWidth="100%"
          inputWidth="50%"
        />
        <Text>одделение</Text>
      </FlexContainer>
      <Input
        type="text"
        name="nameSurname"
        value={formData.nameSurname}
        onChange={handleChange}
        description={"име и презиме на ученикот/ученичката"}
        separatorWidth="100%"
        inputWidth="100%"
        textAlign="center"
      />
      <FlexContainer justify="center" gap="5px">
        <Text> син/ќерка на</Text>
        <Input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          description={"име на родителот/старателот"}
          separatorWidth="100%"
          inputWidth="30%"
          textAlign="center"
        />
        <Text>роден/а на</Text>
        <Input
          type="text"
          name="birthYear"
          value={formData.birthYear}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="40%"
          textAlign="center"
        />
        <Text>година</Text>
      </FlexContainer>
      <FlexContainer justify="center" gap="5px">
        <Text>во</Text>
        <Input
          type="text"
          name="birthPlace"
          value={formData.birthPlace}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
          textAlign="center"
        />
        <Text> општина</Text>
        <Input
          type="text"
          name="birthMunicipality"
          value={formData.birthMunicipality}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
          textAlign="center"
        />
      </FlexContainer>
      <FlexContainer justify="center" gap="5px">
        <Text> држава</Text>
        <Input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
          textAlign="center"
        />
        <Text> државјанство</Text>
        <Input
          type="text"
          name="citizenship"
          value={formData.citizenship}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
          textAlign="center"
        />
      </FlexContainer>
      <FlexContainer direction="column" align="start">
        <SeparatorLine />
        <FlexContainer gap="5px">
          <Text> во учебната 20</Text>
          <Input
            type="text"
            name="startSchoolYear"
            value={formData.startSchoolYear}
            onChange={handleChange}
            separatorWidth="100%"
            inputWidth="5%"
          />
          <Text> /20</Text>
          <Input
            type="text"
            name="endSchoolYear"
            value={formData.endSchoolYear}
            onChange={handleChange}
            separatorWidth="100%"
            inputWidth="5%"
          />
          <Text> година по</Text>
          <Input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            description="со букви"
            separatorWidth="100%"
            inputWidth="15%"
            textAlign="center"
          />
          <Text> пат учеше во</Text>
          <Select
            name="schoolYear"
            value={formData.schoolYear}
            options={SchoolYears}
            onChange={handleChange}
            description={"со римски број и со букви"}
            separatorWidth="100%"
            inputWidth="33%"
          />
        </FlexContainer>
        <Text>
          одделение на основното училиште и го постигна следниот успех:
        </Text>
      </FlexContainer>
      <SubjectsInfo>
        <Subjects>Задолжителни предмети</Subjects>
        <GradeText> Успех </GradeText>
        <GradeNumber></GradeNumber>
      </SubjectsInfo>
      {formData.mandatorySubjects.map((subject) => (
        <SubjectEntry
          key={subject.id}
          subject={subject}
          subjectsOptions={MandatorySubjects}
          handleChange={handleSubjectChange}
        />
      ))}
    </>
  );
};
