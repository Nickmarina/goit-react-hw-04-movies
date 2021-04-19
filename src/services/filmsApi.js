import axios from 'axios';
import apiKey from './apiKey';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () => {
  return axios
    .get(`/trending/movie/week?api_key=${apiKey}`)
    .then(({ data }) => data.results)
    .catch(error => console.log(error));
};

export const getSearchMovies = query => {
  return axios
    .get(
      `/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`,
    )
    .then(({ data }) => data.results)
    .catch(error => console.log(error));
};

export const getMovie = id => {
  return axios
    .get(`/movie/${id}?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => console.log(error));
};

export const getMovieCast = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => console.log(error));
};

export const getMovieReview = id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => console.log(error));
};

// trendingFilms
// `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`

// searchFilms
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// запрос полной информации о фильме для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// запрос информации о актёрском составе для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//запрос обзоров для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
