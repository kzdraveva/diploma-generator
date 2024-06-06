import styled from "styled-components";
import { SubjectEntry } from "./SubjectEntry";
import { OptionalSubjects } from "../../../shared/constants/Subjects";
import { BehaviorResults } from "../../../shared/constants/BehaviorResults";
import { Select } from "../../../shared/select/Select";
import { Input } from "../../../shared/input/Input";
import { SchoolYears } from "../../../shared/constants/SchoolYears";
import { FlexContainer } from "../../../shared/flexContainer/FlexContainer";

const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
`;

const OptionalSubjectsStyle = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;

export const PageTwo = ({ formData, handleSubjectChange, handleChange }) => {
  return (
    <Wrapper>
      <OptionalSubjectsStyle>Изборни наставни предмети</OptionalSubjectsStyle>
      {formData.optionalSubjects.map((subject) => (
        <SubjectEntry
          key={subject.id}
          subject={subject}
          subjectsOptions={OptionalSubjects}
          handleChange={(e, field, id) =>
            handleSubjectChange(e, field, id, true)
          }
        />
      ))}
      <FlexContainer margin="40px 0 15px 0" gap="5px">
        Поведение
        <Select
          name="behaviorResult"
          value={formData.behaviorResult}
          options={BehaviorResults}
          onChange={handleChange}
          separatorWidth="100%"
        />
      </FlexContainer>
      <FlexContainer gap="5px" margin="0 0 15px 0">
        Изостаноци: оправдани
        <Input
          type="text"
          name="justifiedAbsences"
          value={formData.justifiedAbsences}
          onChange={handleChange}
          separatorWidth="100%"
          textAlign="center"
        />
        неоправдани
        <Input
          type="text"
          name="unjustifiedAbsences"
          value={formData.unjustifiedAbsences}
          onChange={handleChange}
          separatorWidth="100%"
          textAlign="center"
        />
      </FlexContainer>
      <FlexContainer direction="column">
        <FlexContainer gap="5px" margin="0 0 15px 0">
          Според постигнатиот успех ученикот/ученичката заврши
          <Select
            name="schoolYear"
            value={formData.schoolYear}
            options={SchoolYears}
            onChange={handleChange}
            description={"со римски број и со букви"}
            separatorWidth="100%"
            inputWidth="35%"
          />
          одделение
        </FlexContainer>
        <FlexContainer gap="10px">
          на основното училиште со
          <Input
            type="text"
            name="finalGrade"
            value={formData.finalGrade}
            description="успех?"
            separatorWidth="100%"
            inputWidth="80%"
          />
        </FlexContainer>
        <FlexContainer justify="space-between">
          <FlexContainer gap="10px">
            Во
            <Input
              type="text"
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              description="место"
              separatorWidth="100%"
            />
            <Input
              type="text"
              name="date"
              value={formData.date}
              description="датум"
              separatorWidth="100%"
            />
            20/
            <Input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              separatorWidth="100%"
            />
            година
          </FlexContainer>
          <FlexContainer>
            Дел бр. <Input separatorWidth="100%" />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Wrapper>
  );
};
