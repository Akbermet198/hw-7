import { Modal, StyledModalDiv } from "../Modal/Modal";
import Button from "../btn";
import { useState } from "react";
import styled from "styled-components";
import { RowDiv } from "../mainContent/main";

export const Movie = ({ url, title, id, rating, onConfirm }) => {
  const [queryModal, setqueryModal] = useState(false);

  const queryHandler = () => {
    setqueryModal((prevState) => !prevState);
  };

  const CancelHandler = (event) => {
    event.preventDefault();
    setqueryModal(false);
  };

  return (
    <StyledOuterDiv>
      {queryModal ? (
        <Modal height="100px">
          <StyledModalDiv>
            <StyledTitle>
              Are you sure you want to delete this movie?
            </StyledTitle>
            <RowDiv>
              <Button
                color="black"
                onClick={() => onConfirm(id)}
                title={"Yes"}
              ></Button>

              <Button
                color="blue"
                onClick={CancelHandler}
                title={"No"}
              ></Button>
            </RowDiv>
          </StyledModalDiv>
        </Modal>
      ) : null}
      <StyledImg src={url} />
      <StyledItemsDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledButtonDiv>
          <Button
            title={`${rating}/5 stars`}
            color="rgb(231,125,59)"
            borderRadius="20px"
          />
          <div>
            <Button title={"DELETE"} color="black" onClick={queryHandler} />

            <Button title={"EDIT"} color="orange" />
          </div>
        </StyledButtonDiv>
      </StyledItemsDiv>
    </StyledOuterDiv>
  );
};

const StyledOuterDiv = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  align-items: center;
  position: relative;
  border-radius: 9px;
  box-shadow: 4px;
`;

const StyledItemsDiv = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const StyledImg = styled.img`
  width: 150px;
  border-radius: 9px 0 0 9px;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;
