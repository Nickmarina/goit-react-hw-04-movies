import { useHistory } from 'react-router-dom';
import { pathes } from '../../services/routes';

const Page404 = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push({
      pathname: pathes.home,
    });
  };

  return (
    <div className="404">
      <h1>404</h1>
      <p>page not found</p>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};

export default Page404;
