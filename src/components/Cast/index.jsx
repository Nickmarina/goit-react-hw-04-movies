import { useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services/filmsApi';
import useStyles from './styles';

const Cast = () => {
  const classes = useStyles();
  const [actors, setActors] = useState([]);
  const match = useRouteMatch();
  const id = match.params.movieId;
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCast(id).then(data => setActors(data.cast));
  }, [id]);

  useEffect(() => {
    return () => console.log('WillUnmout');
  }, []);

  return (
    <ul className={classes.list}>
      {actors.map(({ character, name, profile_path, id }) => (
        <li className={classes.item} key={id}>
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
