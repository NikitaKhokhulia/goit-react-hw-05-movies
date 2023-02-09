import axios from 'axios';

const API_KEY = '4bfe41b6169c7be93b3bc557879c6ed6';
const BASE_URL = 'https://api.themoviedb.org/3/';
// export const IMAGE_URL =

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrendsMovies = () => {
  return instance.get(`/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovie = movieId => {
  return instance.get(`/movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieCast = id => {
  return instance.get(`movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = id => {
  return instance.get(`movie/${id}/reviews?api_key=${API_KEY}`);
};

export const getMoviesByName = query => {
  return instance.get(`search/movie?api_key=${API_KEY}&query=${query}`);
};
