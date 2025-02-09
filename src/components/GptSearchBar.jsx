import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/constants/lang";
import genAI from "../utils/genAi";
import { API_OPTIONS } from "../utils/constants/random";
import {
  addGptMovieResult,
  addLoadingState,
  removeGptMovies,
} from "../utils/slices/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const gptSearch = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTmdb = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    return data?.results[0] || null;
  };
  const handleGptSearchClick = async () => {
    dispatch(removeGptMovies());
    dispatch(addLoadingState());
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      gptSearch.current.value +
      "only give names of 15 movies,comma seperated like the exxample result given ahead .example : Gadar,sholay,Don,Golmal,Krish in " +
      language;

    const result = await model.generateContent(gptQuery);
    if (!result.response) {
      return (
        <div>
          <h1>Errror in fetching the gpt api</h1>
        </div>
      );
    }
    const gptMovies = result.response.text().split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbMovies = await Promise.all(promiseArray);
    dispatch(addLoadingState());
    dispatch(
      addGptMovieResult({ gptMovies: tmdbMovies, movieNames: gptMovies })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptSearch}
          type="text"
          className="p-4 m-4 text-gray-600 border-2 bg-white col-span-9 text-2xl"
          placeholder={lang[language]["gptSearchPlaceHolder"]}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 text-2xl"
          onClick={handleGptSearchClick}
        >
          {lang[language]["search"]}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
