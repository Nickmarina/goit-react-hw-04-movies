import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useStyles from './styles';

const MoviesList = ({ movies }) => {
  const classes = useStyles();
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul className={classes.list}>
      {movies &&
        movies.map(({ id, original_title, original_name, poster_path }) => (
          <li className={classes.item} key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <h3 className={classes.title}>
                {original_title || original_name}
              </h3>
              <img
                className={classes.img}
                src={baseUrl + poster_path}
                alt={original_title}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default MoviesList;
