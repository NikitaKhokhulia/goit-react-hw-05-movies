import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Movies from 'Pages/Movies';
// import Home from 'Pages/Home';
// import MovieDetails from 'Pages/MovieDetails';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
