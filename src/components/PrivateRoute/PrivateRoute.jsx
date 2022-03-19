import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to={redirectTo} />}
    </Route>
  );
}