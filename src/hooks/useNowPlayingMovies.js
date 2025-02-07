import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants/random";
import { addMovies } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addMovies(data.results));
    } catch (err) {
      console.log("Error in movie Fetching");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useNowPlayingMovies;
