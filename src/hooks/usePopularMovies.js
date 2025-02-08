import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants/random";
import { addPopularMovies } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.log("Error in movie Fetching");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default usePopularMovies;
