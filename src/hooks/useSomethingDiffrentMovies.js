import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants/random";
import { addSomethingDiffrentMovies } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useSomethingDiffrentMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addSomethingDiffrentMovies(data.results));
    } catch (err) {
      console.log("Error in movie Fetching");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useSomethingDiffrentMovies;
