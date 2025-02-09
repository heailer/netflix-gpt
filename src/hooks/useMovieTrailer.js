import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/random";
import { addTrailerVideo } from "../utils/slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();

    const filteredData = data.results.filter((data) => data.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getVideo();
  }, []);
};

export default useMovieTrailer;
