import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/filmsApi';
import MoviesList from '../../components/MoviesList';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data));
  }, []);

  useEffect(() => {
    return () => console.log('WillUnmout');
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
export default HomePage;
