import { useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services/filmsApi';

// character name profile_path
const Cast = () => {
  const [actors, setActors] = useState([]);
  const match = useRouteMatch();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCast(match.params.movieId).then(data => setActors(data.cast));
  }, []);

  return (
    <ul>
      {actors.map(({ character, name, profile_path, id }) => (
        <li key={id}>
          {profile_path && (
            <img src={baseUrl + profile_path} alt={name} width="150" />
          )}
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
