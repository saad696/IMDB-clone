import React from 'react'
import { MovieCard } from '..'

const Results = ({movies}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
        {
            movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))
        }
    </div>
  )
}

export default Results