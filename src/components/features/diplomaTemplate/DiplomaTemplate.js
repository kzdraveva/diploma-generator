import React from "react";
import styled from "styled-components";
import { Input } from "../../shared/input/Input";
import { DiplomaHeader } from "./components/DiplomaHeader";
import { SubjectEntry } from "./components/SubjectEntry";

const Wrapper = styled.div`
  border: 1px solid;
  width: 50%;
  padding: 30px 45px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: 600px;
`;

const SeparatorLine = styled.div`
  height: 2px;
  background: #000;
  width: 100%;
`;

const MainText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Grade = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
`;

const PersonalInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SchoolYearInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const SchoolYearInfo = styled.div`
  display: flex;
`;

const SubjectsInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

const Subjects = styled.div`
  width: 50%;
`;

const GradeText = styled.div`
  width: 25%;
`;

const GradeNumber = styled.div`
  width: 25%;
`;

export const DiplomaTemplate = React.forwardRef(
  ({ pageNumber, formData, handleChange, handleSubjectChange }, ref) => {
    return (
      <Wrapper ref={ref}>
        <DiplomaHeader formData={formData} handleChange={handleChange} />
        <MainText>СВИДЕТЕЛСТВО</MainText>
        <Grade>
          за успехот во
          <Input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            description={"со римски број и со букви"}
            separatorWidth="100%"
            inputWidth="50%"
          />
          одделение
        </Grade>
        <Input
          type="text"
          name="nameSurname"
          value={formData.nameSurname}
          onChange={handleChange}
          description={"име и презиме на ученикот/ученичката"}
          separatorWidth="100%"
          inputWidth="100%"
        />
        <PersonalInfo>
          син/ќерка на
          <Input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            description={"име на родителот/старателот"}
            separatorWidth="100%"
            inputWidth="37%"
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
        </PersonalInfo>
        <PersonalInfo>
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
        </PersonalInfo>
        <PersonalInfo>
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
        </PersonalInfo>
        <SchoolYearInfoWrapper>
          <SchoolYearInfo>
            во учебната 20/
            <Input
              type="text"
              name="startSchoolYear"
              value={formData.startSchoolYear}
              onChange={handleChange}
              separatorWidth="100%"
            />
            20
            <Input
              type="text"
              name="endSchoolYear"
              value={formData.endSchoolYear}
              onChange={handleChange}
              separatorWidth="100%"
            />
            година по
            <Input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              separatorWidth="100%"
            />
            пат учеше во
            <Input
              type="text"
              name="gradeNumber"
              value={formData.gradeNumber}
              description="со римски број и со букви"
              separatorWidth="100%"
            />
          </SchoolYearInfo>
          <div>одделение и го постигна следниов успех:</div>
        </SchoolYearInfoWrapper>
        <SeparatorLine />
        <SubjectsInfo>
          <Subjects>Задолжителни предмети</Subjects>
          <GradeText> Успех </GradeText>
          <GradeNumber></GradeNumber>
        </SubjectsInfo>
        {formData.subjects.map((subject) => (
          <SubjectEntry
            key={subject.id}
            subject={subject}
            handleChange={handleSubjectChange}
          />
        ))}
      </Wrapper>
    );
  }
);
