import React from "react";
import { useSelector } from "react-redux";
import GptList from "./GptList";

const GptMovieSuggestions = () => {
  const { gptMovies, movieNames, loading } = useSelector((store) => store.gpt);
  if (loading === true)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 p-4">
        {[...Array(4)].map((_, index) => (
          <div className="relative w-full h-40 overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>
        ))}
      </div>
    );
  if (!movieNames) return <div>No Suggestions Found</div>;
  return (
    <div className="p-4 m-4 bg-black/70  text-white ">
      <GptList movies={gptMovies} />
    </div>
  );
};

export default GptMovieSuggestions;
