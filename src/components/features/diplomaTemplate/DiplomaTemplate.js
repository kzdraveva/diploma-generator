import React from "react";
import styled from "styled-components";
import { PageOne } from "./components/PageOne";
import { PageTwo } from "./components/PageTwo";

const Wrapper = styled.div`
  border: 1px solid;
  width: 30%;
  padding: 30px 45px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: 630px;
  min-height: 630px;
`;

export const DiplomaTemplate = React.forwardRef(
  ({ pageNumber, formData, handleChange, handleSubjectChange }, ref) => {
    return (
      <Wrapper ref={ref}>
        {pageNumber === 1 ? (
          <PageOne
            formData={formData}
            handleChange={handleChange}
            handleSubjectChange={handleSubjectChange}
          />
        ) : (
          <PageTwo
            formData={formData}
            handleSubjectChange={handleSubjectChange}
            handleChange={handleChange}
          />
        )}
      </Wrapper>
    );
  }
);
