import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from 'Pages/Movies';
import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
