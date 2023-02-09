import { getMovie } from 'Api/getMovies';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovie(movieId).then(res => {
      setMovie({ ...res.data });
    });
  }, [movieId]);



  return (
    <div>
      <Link to={location.state.from}>Go back</Link>

      {movie && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '15px',
          }}
        >
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : ''
              }
              width="250px"
              alt={movie.title}
            />
          </div>
          <div style={{ marginLeft: '25px' }}>
            <h1>
              {movie.original_title}
              <span> ({movie.release_date.slice(0, 4)})</span>
            </h1>
            <p>User Score: {Math.round(movie.vote_average * 10)}% </p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(gen => (
                <li key={gen.id}> {gen.name} </li>
              ))}
            </ul>
          </div>
          <Outlet />
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
