import { lazy } from 'react';
const HomePage = lazy(
  () => import('../pages/HomePage') /* webpackChunkName: "HomePage" */,
);

const MoviesPage = lazy(
  () => import('../pages/MoviesPage') /* webpackChunkName: "MoviesPage" */,
);

const MoviePage = lazy(
  () => import('../pages/MoviePage') /* webpackChunkName: "MoviePage" */,
);

export const pathes = {
  home: '/',
  movies: '/movies',
  movie: '/movies/:id',
  cast: '/movies/:movieId/cast',
  reviews: '/movies/:movieId/reviews',
};

export const routes = [
  {
    path: `${pathes.home}`,
    label: 'Home Page',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: `${pathes.movies}`,
    label: 'Movies Page',
    component: MoviesPage,
    exact: true,
    showInMenu: true,
  },
  {
    path: `${pathes.movie}`,
    label: 'Movie Page',
    component: MoviePage,
  },
];
