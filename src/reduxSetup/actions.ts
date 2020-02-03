import { ADD_ELEM ,ADD_LIKE, RESET_ALL } from './actionTypes';
import { MovieItemProps } from '../components/movie-item/movie-item'

export const addElem = (newElement: MovieItemProps[]) => ({
    type: ADD_ELEM,
    payload: newElement
});

export const addLike = (likeElem: number) => ({
    type: ADD_LIKE,
    payload: likeElem
});

export const resetStore = () => ({ type: RESET_ALL });