import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiThumbsUpDuotone } from "react-icons/pi";

const Card = ({ movie }) => {
  console.log(movie);
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg  sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          placeholder="blur"
          blurDataURL="/loading.svg"
          alt="Image not available"
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="p-2 space-y-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {movie.title || movie.original_title}
          </h2>
          <div className="flex space-x-4">
            <p>{movie.release_date}</p>
            <p className="flex items-center">
              <PiThumbsUpDuotone className="mr-1" />
              {movie.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
