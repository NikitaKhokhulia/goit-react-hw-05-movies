import { useEffect, useState } from 'react';
import { getTrendsMovies } from 'Api/getMovies';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendsMovies().then(res => setTrendMovies(res.data.results));
  }, []);

  return (
    <ul>
      {trendMovies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
