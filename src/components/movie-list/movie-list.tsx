import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { MovieItemProps, MovieItem } from '../movie-item/movie-item';
import { MOVIE_URL } from '../../constans';
import { addElem } from '../../reduxSetup'

export const MovieList = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(MOVIE_URL + 'movies')
        .then(response => response.json())
        .then(response => {
            response.map((movie: MovieItemProps[]) => {
                dispatch(addElem(movie));
            });
        })
    }, []);

    const elems = useSelector<RootStore, MovieItemProps[]>(state => state.list);

    return (
        <div className='movie-list__wrapper'>
          {elems.map(movie =>
            <MovieItem {...movie} key={movie.id} />
            )}
        </div>
    );
};
