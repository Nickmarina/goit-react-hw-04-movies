import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getMovie } from '../../services/filmsApi';
import MovieCard from '../../components/MovieCard';
import AdditionalInformation from '../../components/AdditionalInformation';

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const match = useRouteMatch();
  // match.params.id;
  useEffect(() => {
    getMovie(match.params.id).then(data => setMovie(data));
  }, []);
  return (
    <div>
      <button type="button">Go back</button>
      <MovieCard movie={movie} />
      <AdditionalInformation id={match.params.id} />
    </div>
  );
};
export default MoviePage;
