import { getMovieCast } from 'Api/getMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(res => setCast(res.data.cast));
  }, [movieId]);

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
      {cast?.length > 1 ? (
        cast.map(actor => {
          return (
            <li key={actor.cast_id}>
              <img
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w500/` + actor.profile_path
                }
                width="200px"
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </ul>
  );
};

export default Cast;
