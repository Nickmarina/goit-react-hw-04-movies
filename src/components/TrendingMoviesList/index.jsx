import { Link } from 'react-router-dom';

const TrendingMoviesList = ({ movies }) => {
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

export default TrendingMoviesList;
