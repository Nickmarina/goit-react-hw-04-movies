// import { useState, useEffect, useRef } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import queryString from 'query-string';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const MovieSearch = ({ onChangeQuery }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  // const location = useLocation();
  // const history = useHistory();
  // const initialQueryString = queryString.parse(location.search);
  // const [query, setQuery] = useState(initialQueryString.query || '');
  // const inputRef = useRef();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const HandleChangeQuery = e => {
    setQuery(e.currentTarget.value);
    // history.push({
    //   ...location,
    //   search: `query=${e.target.value}`,
    // });
  };
  const HandleSubmit = e => {
    e.preventDefault();
    onChangeQuery(query);
    setQuery('');
  };

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
