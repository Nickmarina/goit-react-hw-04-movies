import { NavLink, Route, useLocation } from 'react-router-dom';
import { pathes } from '../../services/routes';
import Cast from '../../components/Cast';
import Review from '../../components/Review';

const AdditionalInformation = ({ id }) => {
  const location = useLocation();
  return (
    <>
      <div>
        <h4>Additional Information</h4>
        <ul>
          <li>
            <NavLink
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
              to={{
                pathname: `/movies/${id}/review`,
                state: { from: location },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Route path={pathes.cast} component={Cast}></Route>
      <Route path={pathes.review} component={Review}></Route>
    </>
  );
};
export default AdditionalInformation;
