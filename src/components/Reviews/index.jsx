import { useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReview } from '../../services/filmsApi';
import useStyles from './styles';

const Reviews = () => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    getMovieReview(match.params.movieId).then(data => setReviews(data.results));
  }, []);

  return (
    <ul className={classes.list}>
      {reviews.map(({ author, content, id }) => (
        <li className={classes.item} key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
