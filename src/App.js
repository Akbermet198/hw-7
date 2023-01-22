import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import MainContent from "./components/mainContent/main";

const moviesDefault = [
  {
    id: 1,
    title: "Avatar 1",
    rating: 4,
    img: "https://cdn.forbes.ru/forbes-static/750x422/new/2022/11/4-636273af4beec.jpg",
  },
  {
    id: 2,
    title: "Kunfu panda",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },

  {
    id: 3,
    title: "NarutoShipuden",
    rating: 5,
    img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
  },

  {
    id: 4,
    title: "Hobbit",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
  },
];

function App() {
  const [movieList, setMovieButton] = useState(moviesDefault);
  const addMovieHandler = (data) => {
    const newMovieList = [...movieList];
    console.log(data)
    newMovieList.push(data);
    setMovieButton(newMovieList);
  };

  /* console.log(movieButton) */

  return (
    <div className="App">
      <Header onMovieAdd={addMovieHandler} />
      <MainContent movieList={movieList} onNewMovieAdd={setMovieButton}/>
    </div>
  );
}

export default App;
