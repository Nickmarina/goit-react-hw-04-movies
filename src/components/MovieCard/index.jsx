import PropTypes from 'prop-types';
import useStyles from './styles';

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  // console.log(movie);
  const { genres, original_title, overview, poster_path, release_date } = movie;
  const url = `https://themoviedb.org/t/p/w500/${poster_path}`;
  return (
    <div className={classes.cardContainer}>
      {poster_path && <img className={classes.poster} src={url}></img>}
      <div className={classes.descriptionContainer}>
        <h2 className={classes.title}>{original_title}</h2>
        <h3>User Score: %</h3>
        <h4 className={classes.overviewTitle}> Overview</h4>
        <p className={classes.overview}>{overview}</p>
        <h5 className={classes.listTitle}> Genres</h5>
        <ul className={classes.genresList}>
          {genres &&
            genres.map(genre => (
              <li className={classes.listItem} key={genre.id}>
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieCard;
