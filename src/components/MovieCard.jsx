import React from "react";
import { movieCardImage } from "../utils/constants/images";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 pr-4 rounded-sm">
      <img alt="movie-poster" src={movieCardImage + posterPath} />
    </div>
  );
};

export default MovieCard;
