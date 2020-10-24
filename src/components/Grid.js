import React, { useContext } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";

function Grid() {
  const { searchResults, ImageUrl } = useContext(Context);
  const gridStyles = {
    maxWidth: "1200px",

    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  };

  const movieBoxes = searchResults.map(function(movie) {
    return (
      <Movieboxes
        key={movie.id}
        title={movie.original_title}
        imageSrc={ImageUrl + movie.poster_path}
      />
    );
  });

  return (
    <div className="container" style={gridStyles}>
      {searchResults.length > 0 ? movieBoxes : null}
    </div>
  );
}

export default Grid;
