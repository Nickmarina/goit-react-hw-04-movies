import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getMovie } from '../../services/filmsApi';
import MovieCard from '../../components/MovieCard';
import AdditionalInformation from '../../components/AdditionalInformation';
import GoBackBtn from '../../components/GoBackBtn';

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const match = useRouteMatch();
  const id = match.params.id;
  useEffect(() => {
    getMovie(id).then(data => setMovie(data));
  }, [id]);

  useEffect(() => {
    return () => console.log('WillUnmout');
  }, []);

  return (
    <div>
      <GoBackBtn />
      <MovieCard movie={movie} />
      <AdditionalInformation id={id} />
    </div>
  );
};
export default MoviePage;
