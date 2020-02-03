import React, { useState, useEffect } from 'react';
import { MovieItemProps, MovieItem } from '../movie-item/movie-item';
import { MOVIE_URL } from '../../constans';

export const MovieList = () => {
    const [movie, setMovie] = useState<MovieItemProps[]>([]);

    useEffect(() => {
        fetch(MOVIE_URL + 'movies')
        .then(response => response.json())
        .then(response => {
            setMovie(response);
        })
    }, []);
    return (
        <div className='movie-list__wrapper'>
          {movie.map(film =>
            <MovieItem {...film} key={film.id} />
            )}
        </div>
    );
};
