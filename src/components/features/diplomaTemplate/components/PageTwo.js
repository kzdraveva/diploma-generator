import styled from "styled-components";
import { SubjectEntry } from "./SubjectEntry";
import { OptionalSubjects } from "../../../shared/constants/Subjects";
import { BehaviorResults } from "../../../shared/constants/BehaviorResults";
import { Select } from "../../../shared/select/Select";
import { Input } from "../../../shared/input/Input";
import { SchoolYears } from "../../../shared/constants/SchoolYears";
import { FlexContainer } from "../../../shared/flexContainer/FlexContainer";

const Wrapper = styled.div`
  margin-top: 55px;
  width: 100%;
`;

const OptionalSubjectsStyle = styled.div`
  text-align: left;
  margin-bottom: 5px;

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const Text = styled.div`
  font-size: ${(props) => props.fontSize || "16px"};

  @media print {
    visibility: hidden;
    display: block !important;
  }
`;

const SeparatorLine = styled.div`
  height: 1px;
  background-color: black;
  width: 100%;
  margin: 20px 0 15px 0;

  @media print {
    visibility: hidden;
    display: block !important;
  }
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
      <FlexContainer margin="40px 0 25px 0" gap="5px">
        <Text>Поведение</Text>
        <Select
          name="behaviorResult"
          value={formData.behaviorResult}
          options={BehaviorResults}
          onChange={handleChange}
          separatorWidth="100%"
        />
      </FlexContainer>
      <FlexContainer gap="5px" margin="0 0 20px 0">
        <Text>Изостаноци: оправдани</Text>
        <Input
          type="text"
          name="justifiedAbsences"
          value={formData.justifiedAbsences}
          onChange={handleChange}
          separatorWidth="100%"
          textAlign="center"
        />
        <Text>неоправдани</Text>
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
          <Text>Според постигнатиот успех ученикот/ученичката заврши</Text>
          <Select
            name="schoolYear"
            value={formData.schoolYear}
            options={SchoolYears}
            onChange={handleChange}
            description={"со римски број и со букви"}
            separatorWidth="100%"
            inputWidth="35%"
          />
          <Text>одделение</Text>
        </FlexContainer>
        <FlexContainer gap="10px" margin="0 0 20px 0">
          <Text>на основното училиште со</Text>
          <Input
            type="text"
            name="finalGrade"
            value={formData.finalGrade}
            onChange={handleChange}
            description="oпшт успех"
            separatorWidth="100%"
            inputWidth="70%"
            textAlign="center"
          />
        </FlexContainer>
        <FlexContainer justify="space-between">
          <FlexContainer gap="5px">
            <Text>Во</Text>
            <Input
              type="text"
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              description="место"
              textAlign="center"
              inputWidth="100%"
              separatorWidth="100%"
            />
            <Text>,</Text>
            <Input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              description="датум"
              textAlign="center"
              inputWidth="100%"
              separatorWidth="100%"
            />
            <Text>20</Text>
            <Input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              separatorWidth="100%"
              inputWidth="20%"
              textAlign="center"
            />
            <Text>година.</Text>
          </FlexContainer>
          <FlexContainer justify="flex-end" gap="5px">
            <Text>Дел бр.</Text>
            <Input
              type="text"
              name="delNum"
              value={formData.delNum}
              onChange={handleChange}
              inputWidth="40%"
              separatorWidth="100%"
              textAlign="center"
            />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer justify="space-between" margin="90px 0 0 0">
        <FlexContainer direction="column" width="30%">
          <Text>Одделенски наставник/</Text>
          <Text>Раководител на паралелката</Text>
          <SeparatorLine />
          <SeparatorLine />
        </FlexContainer>
        <FlexContainer width="30%" justify="center">
          <Text>M.П</Text>
        </FlexContainer>
        <FlexContainer width="30%" justify="center" direction="column">
          <Text>Директор</Text>
          <SeparatorLine />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer direction="column" margin="50px 0 0 0">
        <FlexContainer gap="5px">
          <Text>Училиштето е верифицирано со акт број</Text>
          <Input
            type="text"
            name="actNum"
            value={formData.actNum}
            textAlign="center"
            onChange={handleChange}
            inputWidth="25%"
            separatorWidth="100%"
          />
          <Text>oд</Text>
          <Input
            type="text"
            name="fullYear"
            value={formData.fullYear}
            onChange={handleChange}
            textAlign="center"
            inputWidth="25%"
            separatorWidth="100%"
          />
          <Text>година</Text>
        </FlexContainer>
        <FlexContainer gap="5px">
          <Text>на</Text>
          <Input
            type="text"
            name="ministry"
            value={formData.ministry}
            onChange={handleChange}
            inputWidth="100%"
            separatorWidth="100%"
            textAlign="center"
            description="име на ресорното министерство"
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer direction="column" align="flex-start" margin="55px 0 0 0">
        <Text fontSize="10px">Образец број 11</Text>
        <Text fontSize="10px">
          Издавач: Биро за развој на образованието - Скопје
        </Text>
        <Text fontSize="10px">
          Печати: АД Печатница Киро Д. Дандаро - заштитно друштво Битола
        </Text>
      </FlexContainer>
    </Wrapper>
  );
};
