import { MovieResults } from '@/app/components';
import React from 'react';

const API_KEY = process.env.API_KEY;

const SearchPage = async ({ params }) => {
    console.log(params.searchTerm);
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query${params.searchTerm}&include_adult=false&language=en-US&page=1`
    );

    if (!res.ok) {
        throw new Error('Error fetching data');
    }

    const data = await res.json();
    const movies = data.results

    console.log(data, movies);

    return (
        <div>
            {movies && !movies.length ? (
                <h1 className='text-center'>No results found!</h1>
            ) : (
                <MovieResults movies={movies} />
            )}
        </div>
    );
};

export default SearchPage;
