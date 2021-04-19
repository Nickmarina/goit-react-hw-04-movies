// import { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const MovieSearch = ({ onChangeQuery }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const location = useLocation();
  const history = useHistory();
  const initialQueryState = queryString.parse(location.search);

  const HandleChangeQuery = e => {
    setQuery(e.currentTarget.value);
  };

  const HandleSubmit = e => {
    e.preventDefault();
    onChangeQuery(query);
    setQuery('');
  };

  useEffect(() => {
    if (query) {
      history.push({
        ...location,
        search: `?query=${query}`,
      });
    }

    onChangeQuery(initialQueryState.query);
  }, [query]);

  return (
    <form className={classes.form} onSubmit={HandleSubmit}>
      <input
        className={classes.input}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies "
        onChange={HandleChangeQuery}
      />
      <button className={classes.btn} type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

MovieSearch.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};
export default MovieSearch;
