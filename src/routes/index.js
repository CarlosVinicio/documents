import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/constants/routes.constant';

const RenderRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route path={route.path} element={route.element} key={route.key} />
        );
      })}
      <Route
        path="*"
        element={
          <div id="404">
            <h1>404 Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
};

export const AppRouting = () => {
  return (
    <div>
      <RenderRoutes routes={ROUTES} />
    </div>
  );
};