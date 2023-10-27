import React from 'react'

const Results = ({movies}) => {
  return (
    <div>
        {
            movies.map(movie => (
                <div key={movie.id}>{movie.original_title}</div>
            ))
        }
    </div>
  )
}

export default Results