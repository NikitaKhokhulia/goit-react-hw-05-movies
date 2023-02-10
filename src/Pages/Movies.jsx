import { useState, useEffect } from 'react';
import { getMoviesByName } from 'Api/getMovies';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [moviesByName, setMoviesByName] = useState([]);
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    getMoviesByName(query).then(res => {
      setMoviesByName(res.data.results);
    });
  }, [query]);

  const onSubmitHandler = data => {
    setQuery(data);
  };

  const onChange = evt => {
    setInputValue(evt.target.value);
  };

  const updateQueryString = (query, value) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onSubmitHandler(inputValue);
    updateQueryString(inputValue, `query`);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={inputValue}></input>
        <button type="submit">Search</button>
      </form>

      <ul>
        {moviesByName.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
