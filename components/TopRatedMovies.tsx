import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopRatedMovies = ({ topRatedMovies }: { topRatedMovies: any }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">Top Rated Movies</h1>
        <Link
          href="/movies/popular"
          className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-4">
        {topRatedMovies.results.slice(0, 4).map((movie: any) => (
          <Link
            href={`/movie/${movie?.id}`}
            key={movie.id}
            className="w-full flex flex-col"
          >
            <div className="w-full h-[400px] relative">
              <Image
                src={
                  movie?.poster_path
                    ? `${IMAGE_URL}${movie?.poster_path}`
                    : `${EMPTY_MOVIE_URL}`
                }
                alt={movie?.title}
                fill={true}
              />
            </div>
            <div className="flex gap-4 justify-between items-center mt-3 bg-red">
              <h2 className="text-lg font-medium">{movie?.title}</h2>
              <span
                className={`flex flex-col p-2 text-white rounded-md ${
                  movie?.vote_average < 5
                    ? `bg-red-700`
                    : movie?.vote_average == 5
                    ? `bg-orange-700`
                    : `bg-green-700`
                }`}
              >
                {movie?.vote_average}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
