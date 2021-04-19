import { useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReview } from '../../services/filmsApi';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    getMovieReview(match.params.movieId).then(data => setReviews(data.results));
  }, []);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Review;
