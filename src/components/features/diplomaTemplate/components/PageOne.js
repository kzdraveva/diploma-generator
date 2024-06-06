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
  margin: 30px 0 10px 0;
`;

const MainText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const SubjectsInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
`;

const Subjects = styled.div`
  width: 50%;
`;

const GradeText = styled.div`
  width: 35%;
  text-align: center;
`;

const GradeNumber = styled.div`
  width: 15%;
`;

export const PageOne = ({ formData, handleChange, handleSubjectChange }) => {
  return (
    <>
      <DiplomaHeader formData={formData} handleChange={handleChange} />
      <MainText>СВИДЕТЕЛСТВО</MainText>
      <FlexContainer justify="center" gap="5px" margin="25px 0 0 0">
        за успехот во
        <Select
          name="schoolYear"
          value={formData.schoolYear}
          options={SchoolYears}
          onChange={handleChange}
          description={"со римски број и со букви"}
          separatorWidth="100%"
          inputWidth="50%"
        />
        одделение
      </FlexContainer>
      <Input
        type="text"
        name="nameSurname"
        value={formData.nameSurname}
        onChange={handleChange}
        description={"име и презиме на ученикот/ученичката"}
        separatorWidth="100%"
        inputWidth="100%"
      />
      <FlexContainer justify="center" gap="5px">
        син/ќерка на
        <Input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          description={"име на родителот/старателот"}
          separatorWidth="100%"
          inputWidth="30%"
        />
        роден/а на
        <Input
          type="text"
          name="birthYear"
          value={formData.birthYear}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="40%"
        />
        година
      </FlexContainer>
      <FlexContainer justify="center" gap="5px">
        во
        <Input
          type="text"
          name="birthPlace"
          value={formData.birthPlace}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
        />
        општина
        <Input
          type="text"
          name="birthMunicipality"
          value={formData.birthMunicipality}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
        />
      </FlexContainer>
      <FlexContainer justify="center" gap="5px">
        држава
        <Input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
        />
        државјанство
        <Input
          type="text"
          name="citizenship"
          value={formData.citizenship}
          onChange={handleChange}
          separatorWidth="100%"
          inputWidth="50%"
        />
      </FlexContainer>
      <FlexContainer direction="column" align="start">
        <SeparatorLine />
        <FlexContainer gap="5px">
          во учебната 20/
          <Input
            type="text"
            name="startSchoolYear"
            value={formData.startSchoolYear}
            onChange={handleChange}
            separatorWidth="100%"
            inputWidth="5%"
          />
          20
          <Input
            type="text"
            name="endSchoolYear"
            value={formData.endSchoolYear}
            onChange={handleChange}
            separatorWidth="100%"
            inputWidth="5%"
          />
          година по
          <Input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            separatorWidth="100%"
            inputWidth="15%"
          />
          пат учеше во
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
        <div>одделение на основното училиште и го постигна следниот успех:</div>
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
