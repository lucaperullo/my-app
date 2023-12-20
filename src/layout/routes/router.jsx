import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        {routes.map(routeProps => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
      </Routes>
    </Router>
  );
}
