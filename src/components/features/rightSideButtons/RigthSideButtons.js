import styled from "styled-components";
import { Button } from "../../shared/button/Button";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-items: center;
  gap: 30px;
`;

export const RightSideButtons = ({
  pageNumber,
  onPrint,
  onDelete,
  onPageChange,
}) => {
  return (
    <ButtonsWrapper>
      <Button onClick={onPrint}>Печати</Button>
      <Button onClick={onDelete}>Избриши</Button>
      <Button onClick={onPageChange}>
        Страна {pageNumber === 1 ? "2" : "1"}
      </Button>
    </ButtonsWrapper>
  );
};
