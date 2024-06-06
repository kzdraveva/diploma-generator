import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;
