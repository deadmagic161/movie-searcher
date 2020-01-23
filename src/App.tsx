import React from 'react';
import { MovieList } from './components/movie-list/movie-list';
import data from './mock/movies.json';

const App: React.FC = () => {
    return <MovieList {...data} />;
};

export default App;
