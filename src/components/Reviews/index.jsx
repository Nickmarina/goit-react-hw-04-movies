import { useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReview } from '../../services/filmsApi';
import useStyles from './styles';

const Reviews = () => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const match = useRouteMatch();
  const id = match.params.movieId;

  useEffect(() => {
    getMovieReview(id).then(data => setReviews(data.results));
  }, [id]);

  useEffect(() => {
    return () => console.log('WillUnmout');
  }, []);

  return (
    <div>
      {reviews.length === 0 && (
        <p className={classes.noReviewText}>No reviews</p>
      )}
      <ul className={classes.list}>
        {reviews.map(({ author, content, id }) => (
          <li className={classes.item} key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
