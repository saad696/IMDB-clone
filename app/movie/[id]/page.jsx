import Image from 'next/image';
import React from 'react';
import { PiThumbsUpDuotone } from 'react-icons/pi';

const API_KEY = process.env.API_KEY;

const getMovie = async (movieId) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );

    return await res.json();
};

const MoviePage = async ({ params }) => {
    const movie = await getMovie(params.id);

    return (
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                <Image
                    className='rounded-lg'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    placeholder='blur'
                    blurDataURL='/loading.svg'
                    alt='Movioe Poster'
                    width={500}
                    height={300}
                    style={{
                        maxWidth: '100%',
                        height: '100%',
                    }}
                />
                <div className='p-2'>
                    <h2 className='text-2xl mb-3 font-bold text-gray-800 dark:text-amber-500'>
                        {movie.original_title}
                    </h2>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1 text-gray-800 dark:text-amber-500'>Overview:</span>
                        {movie.overview}
                    </p>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1 text-gray-800 dark:text-amber-500'>Date Released:</span>
                        {movie.release_date}
                    </p>
                    <p className='text-lg mb-3 flex items-center'>
                        <span className='font-semibold mr-1 text-gray-800 dark:text-amber-500'>Ratings:</span>
                        {movie.vote_count} <PiThumbsUpDuotone className="ml-1" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
