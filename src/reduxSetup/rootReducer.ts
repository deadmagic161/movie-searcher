import { ADD_ELEM, ADD_LIKE, RESET_ALL} from './actionTypes';
import { MovieItemProps } from '../components/movie-item/movie-item'

const initialState: RootStore = { list: [], like: [] };

const actionHanlder = new Map<string, RootReducer>([
    [
        ADD_ELEM,
        (state, action: Action<MovieItemProps>) => {
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        }
    ],
    [
        ADD_LIKE,
        (state, action: Action<number>) => {
            const { like } = state;
            if (like.includes(action.payload)) {
                return {
                    ...state,
                    like: like.filter(e => e !== action.payload)
                }
            } else {
                return {
                    ...state,
                    like: [...state.like, action.payload]
                }
            }
        }
    ],
    [RESET_ALL, () => initialState],
    ["DEFAULT_PLUG", (state: RootStore) => state]
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
    const reducerToFire = (actionHanlder.has(action.type)
      ? actionHanlder.get(action.type)
      : actionHanlder.get("DEFAULT_PLUG")) as RootReducer;
  
    return reducerToFire(state, action);
  }