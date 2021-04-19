import { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const MovieSearch = ({ onChangeQuery }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const HandleChangeValue = e => {
    setValue(e.currentTarget.value);
  };
  const HandleSubmit = e => {
    e.preventDefault();
    onChangeQuery(value);
    setValue('');
  };

  return (
    <form className={classes.form} onSubmit={HandleSubmit}>
      <input
        className={classes.input}
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies "
        onChange={HandleChangeValue}
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
