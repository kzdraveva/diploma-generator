import { MandatorySubjects } from "../../../shared/constants/Subjects";
import { Grades, GradesNumber } from "../../../shared/constants/Grades";
import { Select } from "../../../shared/select/Select";
import styled from "styled-components";

const SubjectsInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

export const SubjectEntry = ({ subject, handleChange }) => (
  <SubjectsInfo>
    <Select
      inputWidth="50%"
      separatorWidth="80%"
      options={MandatorySubjects}
      value={subject.name}
      onChange={(e) => handleChange(e, "name", subject.id)}
    />
    <Select
      inputWidth="25%"
      separatorWidth="70%"
      options={Grades}
      value={subject.grade}
      onChange={(e) => handleChange(e, "grade", subject.id)}
    />
    <Select
      inputWidth="25%"
      separatorWidth="60%"
      options={GradesNumber}
      value={subject.gradeNumber}
      onChange={(e) => handleChange(e, "gradeNumber", subject.id)}
    />
  </SubjectsInfo>
);
