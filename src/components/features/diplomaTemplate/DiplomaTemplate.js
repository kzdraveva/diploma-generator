import React from "react";
import styled from "styled-components";
import { PageOne } from "./components/PageOne";
import { PageTwo } from "./components/PageTwo";

const Wrapper = styled.div`
  border: 1px solid;
  border-bottom: none;
  width: 90%;
  padding: 25px 45px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 650px;

  @media print {
    overflow: visible;
    height: auto;
    page-break-inside: avoid;
  }
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
