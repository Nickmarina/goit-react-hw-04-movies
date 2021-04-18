import { Link } from 'react-router-dom';
// import {} from 'react';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title, original_name }) => (
        <li>
          <Link key={id}>{original_title || original_name}</Link>
        </li>
      ))}
    </ul>
  );
};
// propTypes
export default MoviesList;
