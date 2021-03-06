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
const Page404 = lazy(() =>
  import('../pages/Page404' /* webpackChunkName: "Page404" */),
);

export const pathes = {
  home: '/',
  movies: '/movies',
  movie: '/movies/:id',
  cast: '/movies/:id/cast',
  reviews: '/movies/:id/reviews',
};

export const routes = [
  {
    path: `${pathes.home}`,
    label: 'Home Page',
    component: HomePage,
    exact: true,
    showInMenu: true,
    key: `${pathes.home}`,
  },
  {
    path: `${pathes.movies}`,
    label: 'Movies Page',
    component: MoviesPage,
    exact: true,
    showInMenu: true,
    key: `${pathes.movies}`,
  },
  {
    path: `${pathes.movie}`,
    label: 'Movie Page',
    component: MoviePage,
    key: `${pathes.movie}`,
  },

  {
    component: Page404,
    key: 'page404',
  },
];
