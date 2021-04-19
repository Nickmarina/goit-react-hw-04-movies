import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './services/routes';
import AppBar from './components/AppBar';

const App = () => {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ key, path, exact, component: Component }) => (
            <Route key={key} path={path} exact={exact} component={Component} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
