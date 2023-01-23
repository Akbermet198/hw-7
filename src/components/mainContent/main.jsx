import React from "react";
import styled from "styled-components";
 


import { Movie } from "../MovieItem/Movie";
 

const MainContent = (props) => {
  const movieListDefault = props.movieList;

 
  const deleteHandler = (id) => {
   
    const newMovies = movieListDefault.filter((element) => {
      return id !== element.id;
    });
    props.onNewMovieAdd(newMovies);
    
    return newMovies;
  };



  return (
    <MainDiv>
      {movieListDefault.map((e) => {
        return (
          <Movie

          onConfirm={deleteHandler}
          key={e.title}
          title={e.title}
          url={e.img}
          rating={e.rating}
          id={e.id}
          
          />
        )
      })}
    </MainDiv>
  );
};

export default MainContent;

const MainDiv = styled.div`
width: 60vw;
margin: 0 auto;
`

 export const RowDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`