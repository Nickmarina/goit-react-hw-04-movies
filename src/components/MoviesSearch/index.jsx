import { useState, useEffect } from 'react';

const MovieSearch = ({ onChangeQuery }) => {
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
    <form onSubmit={HandleSubmit}>
      <input
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={HandleChangeValue}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
export default MovieSearch;
