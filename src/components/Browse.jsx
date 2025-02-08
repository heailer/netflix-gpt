import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useSomethingDiffrentMovies from "../hooks/useSomethingDiffrentMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useSomethingDiffrentMovies();

  return (
    <div>
      <div className="">
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
