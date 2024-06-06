import { Grades, GradesNumber } from "../../../shared/constants/Grades";
import { FlexContainer } from "../../../shared/flexContainer/FlexContainer";
import { Select } from "../../../shared/select/Select";

export const SubjectEntry = ({ subject, handleChange, subjectsOptions }) => (
  <FlexContainer justify="space-between">
    <Select
      inputWidth="50%"
      separatorWidth="100%"
      options={subjectsOptions}
      value={subject.name}
      onChange={(e) => handleChange(e, "name", subject.id)}
    />
    <Select
      inputWidth="25%"
      separatorWidth="100%"
      options={Grades}
      value={subject.grade}
      onChange={(e) => handleChange(e, "grade", subject.id)}
    />
    <Select
      inputWidth="15%"
      separatorWidth="100%"
      options={GradesNumber}
      value={subject.gradeNumber}
      onChange={(e) => handleChange(e, "gradeNumber", subject.id)}
    />
  </FlexContainer>
);
