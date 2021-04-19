import { NavLink, Route, useLocation } from 'react-router-dom';
import { pathes } from '../../services/routes';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import useStyles from './styles';

const AdditionalInformation = ({ id }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.activeLink}
              to={{
                pathname: `/movies/${id}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.activeLink}
              to={{
                pathname: `/movies/${id}/reviews`,
                state: { from: location },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Route path={pathes.cast} component={Cast}></Route>
      <Route path={pathes.reviews} component={Reviews}></Route>
    </>
  );
};
export default AdditionalInformation;
