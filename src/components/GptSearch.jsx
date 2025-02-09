import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { backGroundImage } from "../utils/constants/images";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img alt="Background Image" src={backGroundImage} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
