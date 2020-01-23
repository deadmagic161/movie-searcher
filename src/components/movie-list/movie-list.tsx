import React from 'react';
import { MovieItemProps, MovieItem } from '../movie-item/movie-item';

export const MovieList = (props: MovieItemProps[]) => {
    return (
        <div className='movie-list__wrapper'>
            {Object.keys(props).map((item, i) => {
                return <MovieItem {...props[i]} key={props[i].id} />;
            })}
        </div>
    );
};
