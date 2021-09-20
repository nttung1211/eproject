import React, { FC } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HTTP_ERROR from '../constants/httpError';
import PATH from '../constants/path';
import { useAppContext } from '../context/AppContext';
import authService from '../services/authService';
import { hasValidToken } from '../utils/helpers';

interface Props {
  component?: React.ReactNode;
  path: string[];
  exact?: boolean;
  requiredRoles: string[];
}

const PrivateRoute: FC<Props> = ({ path, exact = false, children, requiredRoles, component }) => {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useAppContext();
  toast.dismiss();

  const fetchCurrentUser = async (redirectPath: string) => {
    try {
      const user = await authService.fetchCurrentUser();
      setCurrentUser(user);
      history.push(redirectPath);
    } catch {
      history.push(HTTP_ERROR.notFound.path);
    }
  };

  return (
    <Route path={path} exact={exact}>
      {({ location }) => {
        const previousPath = location.pathname || PATH.home;

        // case 1: already logged in, have not close app since then => have user in context
        if (currentUser) {
          if (requiredRoles.includes(currentUser.role!)) {
            return component || children;
          }

          return (
            <Redirect
              to={{
                pathname: HTTP_ERROR.unauthorized.path,
                state: {
                  from: previousPath,
                },
              }}
            />
          );
        }

        // case 2: logged in before, have closed app but still have token in localstorage
        if (hasValidToken()) {
          fetchCurrentUser(previousPath);
          return null;
        }

        // case 3: have nothing
        toast.warn('Please sign in!');
        return (
          <Redirect
            to={{
              pathname: PATH.signIn,
              state: {
                from: previousPath,
              },
            }}
          />
        );
      }}
    </Route>
  );
};

export default PrivateRoute;
