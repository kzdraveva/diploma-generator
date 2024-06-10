import styled from "styled-components";

const LayoutWrapper = styled.div`
  box-sixing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0 20px;
`;

export const MainLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
