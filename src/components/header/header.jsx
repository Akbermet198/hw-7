import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../btn";
import { Modal } from "../Modal/Modal";
import "./header.css";

const checkWhetherEmpty = (parameter) => {
  if (parameter.current.value === "") {
    parameter.current.focus()
    parameter.current.style.outline = "2px solid red";
  }
};

const Header = (props) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const ratingInputRef = useRef();

  const saveHandler = (e) => {
    e.preventDefault();
    const movieData = {
      id: titleInputRef.current.value,
      title: titleInputRef.current.value,
      rating: ratingInputRef.current.value,
      img: urlInputRef.current.value,
    };

    checkWhetherEmpty(titleInputRef);
    checkWhetherEmpty(ratingInputRef);
    checkWhetherEmpty(urlInputRef);

     
    if (
      titleInputRef.current.value !== "" &&
      ratingInputRef.current.value !== "" &&
      urlInputRef.current.value !== ""
    ) {
      props.onMovieAdd(movieData);
      setModalVisibility(false);
    }
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setModalVisibility(false);
  };

  const toggleModalVisibility = (event) => {
    event.preventDefault();
    setModalVisibility((prevstate) => !prevstate);
  };

  return (
    <div>
      <h2>
        Favorite Movies
        <div className="addmovie">
          <Button
            onClick={toggleModalVisibility}
            witdh
            title="ADD MOVIES"
            color="rgb(231,125,59)"
            width="130px"
            height="40px"
          />
        </div>
      </h2>
      {isModalVisible ? (
        <Modal height={"300px"}>
          <StyledInnerDiv>
            <StyledLabel htmlFor="title">title</StyledLabel>
            <StyledInput
              placeholder="type movie°s name"
              name="title"
              ref={titleInputRef}
            ></StyledInput>
            <StyledLabel htmlFor="url">url</StyledLabel>
            <StyledInput
              placeholder="type movie°s url"
              name="url"
              ref={urlInputRef}
            ></StyledInput>
            <StyledLabel htmlFor="rating">rating</StyledLabel>
            <StyledInput
              placeholder="type movie°s rating"
              name="rating"
              ref={ratingInputRef}
            ></StyledInput>
          </StyledInnerDiv>
          <StyledButtonDiv>
            <Button onClick={saveHandler} title={"Add"} color="blue" />
            <Button title={"Cancel"} color="blue" onClick={cancelHandler} />
          </StyledButtonDiv>
        </Modal>
      ) : null}
    </div>
  );
};

export default Header;

const StyledInput = styled.input`
  width: 350px;
  height: 30px;
  margin: 5px;
  background-color: #f0e7d6;
  border: none;
  padding-left: 10px;
`;

export const StyledInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledLabel = styled.label`
  color: white;
`;
