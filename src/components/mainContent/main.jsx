import React from "react";
import { useState } from "react";

import Button from "../btn";
import { StyledInnerDiv } from "../header/header";
import { Modal } from "../Modal/Modal";

import "./main.css";

const MainContent = (props) => {
  const movieListDefault = props.movieList;

  const [queryModal, setqueryModal] = useState(false);

  const queryHandler = (event) => {
    event.preventDefault();
    setqueryModal((prevState) => !prevState);
  };
  /* deleteHandler(index) */
  const deleteHandler = (id) => {
    
    const newMovies = movieListDefault.filter((element ) => {
      return   id !== element.id
    });
    props.onNewMovieAdd(newMovies);
    setqueryModal(false);
    return newMovies;
  };

  return (
    <div>
      {movieListDefault.map((e  ) => {
        return (
          <div className="all-items">
            {queryModal ? (
              <Modal>
                <StyledInnerDiv>
                   
                  <button onClick={()=> deleteHandler(e.id)} >АХАХА</button>
                </StyledInnerDiv>
              </Modal>
            ) : null}
            <img src={e.img} alt="" />
            <div className="btns">
              <h3>{e.title}</h3>
              <div className="items">
                <Button
                  title={"4/5 stars"}
                  color="rgb(231,125,59)"
                  borderRadius="20px"
                />
                <Button title={"DELETE"} color="blue" onClick={queryHandler} />
                <Button title={"EDIT"} color="blue" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
