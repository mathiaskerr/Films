import React, {useState} from "react";
import Film from "./Film";

const FilmList = ({films}) => {
  
   const filmNodes = films.map((film) => {
    return (<Film film={film.name} url={film.url} key={film.id}/>)
   });

    return(
        <div>
        <h3>Upcoming Film Releases for UK</h3>
        <hr></hr>
            {filmNodes}
        </div>
    )
};

export default FilmList;

