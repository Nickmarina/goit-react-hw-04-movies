import { useState, useEffect } from 'react';
import { getSearchMovies } from '../../services/filmsApi';
import MoviesSearch from '../../components/MoviesSearch';
import MoviesList from '../../components/MoviesList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleQuery = input => {
    setQuery(input);
  };
  useEffect(() => {
    if (!query) return;
    console.log(query);
    console.log(movies);
    getSearchMovies(query).then(data => setMovies(data));
  }, [query]);

  return (
    <div>
      <MoviesSearch onChange={handleQuery} />
      {/* <MoviesList movies={movies} /> */}
    </div>
  );
};
export default MoviesPage;
