type RootStore = { list: MovieItemProps[]; like: number[] };


type Action<T> = { type: string; payload: T };

type ActionsT = 
    | typeof ADD_ELEM
    | typeof ADD_LIKE
    | typeof RESET_ALL
    | "DEFAULT_PLUG"

type RootReducer<T = ActionsT> = (
    state: RootStore,
    action: Action<T>
) => RootStore;