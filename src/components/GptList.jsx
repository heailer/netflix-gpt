import { movieCardImage } from "../utils/constants/images";

const GptList = ({ movies }) => {
  if (!movies || movies.length === 0)
    return <p className="text-center">No movies available</p>;

  return (
    <div className="px-6">
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex">
          {movies
            .filter((movie) => movie && movie.poster_path)
            .map((movie) => (
              <div key={movie.id} className="w-36 md:w-44 pr-4 rounded-sm">
                <img
                  alt={movie.title || "movie-poster"}
                  src={movieCardImage + movie.poster_path}
                  className="rounded-md"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GptList;
