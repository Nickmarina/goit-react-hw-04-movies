import PropTypes from 'prop-types';
const MovieCard = ({ movie }) => {
  // console.log(movie);
  const { genres, original_title, overview, poster_path, release_date } = movie;
  const url = `https://themoviedb.org/t/p/w500/${poster_path}`;
  return (
    <div>
      <img src={url}></img>
      <h2>{original_title}</h2>
      <p> user score</p>
      <h3>Owerview</h3>
      <p>{overview}</p>
      <ul>
        <h3> Genres</h3>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.object.isRequired,
};
export default MovieCard;
