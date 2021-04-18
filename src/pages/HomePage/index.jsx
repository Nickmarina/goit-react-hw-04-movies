import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/filmsApi';
import TrendingMoviesList from '../../components/TrendingMoviesList';
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data));
  });
  return (
    <div>
      <h2>Trending today</h2>
      <TrendingMoviesList movies={movies} />
    </div>
  );
};
export default HomePage;
