import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './services/routes';
import AppBar from './components/AppBar';
// import Page404 from './pages/Page404';

const App = () => {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
