import React,{useState} from 'react';

function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={` p-4 h-[550px] border bg-black rounded-lg shadow-md cursor-pointer relative `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`${isHovered ? 'filter blur-lg' : ''} flex flex-col items-center justify-center`}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4 h-[300px] " />
      <h2 className="text-xl text-white font-semibold">{movie.title.slice(0,75)}</h2>
      <p className="text-gray-600 text-xs my-2">{movie.overview.slice(0,100)}...</p>
      <p className="mt-2 text-sm text-[#17a2b8] font-bold">Rating: {movie.vote_average}</p>
      </div>
      {isHovered && (
        <div className="h-[550px] overflow-y-auto absolute top-0 w-full p-4 ">
            <h2 className="text-xl text-white mt-3 mb-5 font-semibold">{movie.title.slice(0,75)}</h2>
          <p className="text-gray-400  font-extrabold px-2 text-sm">{movie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
