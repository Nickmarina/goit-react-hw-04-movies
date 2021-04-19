import { useState, useEffect } from 'react';
import { getSearchMovies } from '../../services/filmsApi';
import MoviesSearch from '../../components/MoviesSearch';
import MoviesList from '../../components/MoviesList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const HandleChangeQuery = newQuery => {
    setQuery(newQuery);
    setMovies([]);
  };

  useEffect(() => {
    if (!query) return;
    getSearchMovies(query).then(results => setMovies(results));
  }, [query]);

  return (
    <div>
      <MoviesSearch onChangeQuery={HandleChangeQuery} />
      <MoviesList movies={movies} />
    </div>
  );
};
export default MoviesPage;
