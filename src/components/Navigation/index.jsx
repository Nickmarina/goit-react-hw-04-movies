import { NavLink } from 'react-router-dom';
import { pathes } from '../../services/routes';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();
  return (
    <div>
      <NavLink
        exact
        to={pathes.home}
        className={classes.link}
        activeClassName={classes.linkActive}
      >
        Home
      </NavLink>
      <NavLink
        to={pathes.movies}
        className={classes.link}
        activeClassName={classes.linkActive}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
