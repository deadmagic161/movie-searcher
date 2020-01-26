import React, { useState, useEffect } from 'react';
import { MovieItemProps, MovieItem } from '../movie-item/movie-item';

export const MovieList = () => {
    const [films, setFilms] = useState<MovieItemProps[]>([]);
    useEffect(() => {
        fetch('https://devlab.website/v1/movies')
        .then(response => response.json())
        .then(response => {
            const data = response;
            setFilms(data);
        })
    }, []);
    return (
        <div className='movie-list__wrapper'>
          {films.map(film =>
            <MovieItem {...film} key={film.id} />
            )}
        </div>
    );
};
