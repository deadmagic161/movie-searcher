import React from "react";
import { useDispatch } from 'react-redux';
import { addLike } from '../../reduxSetup'
 

export type MovieItemProps = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes?: number;
    vote_average: number;
    vote_count: number;
    director?: string;
    poster_path?: string;
    release_date: string;
};

export const MovieItem = (props: MovieItemProps) => {
    const { id, title, overview, likes, vote_average }  = props;
    const dispatch = useDispatch();

    const addFavorite = () =>{ dispatch(addLike(id))};

    return (
        <div className='movie-card__wrapper'>
            <h1 className='movie-card__title'>{title}</h1>
            <p className='movie-card__overview'>{overview}</p>
            <div className='movie-card__rate-wrapper'>
                <span className='movie-card__likes'>{likes}</span>
                <span className='movie-card__vote'>{vote_average}</span>
            </div>
            <button onClick={addFavorite}>Like</button>
        </div>

    );
};
