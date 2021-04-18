import { useState, useEffect } from 'react';

const MovieSearch = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onChange(value);
    setValue('');
  };

  useEffect(
    input => {
      setValue(input);
    },
    [value],
  );

  return (
    <form>
      <input type="text" value={value} onSubmit={handleSubmit}></input>
      <button type="submit">Search</button>
    </form>
  );
};
export default MovieSearch;
