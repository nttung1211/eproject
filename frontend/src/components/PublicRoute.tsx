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
}

const PublicRoute: FC<Props> = ({ path, exact = false, children, component }) => {
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

        if (currentUser) {
          if (location.pathname === PATH.home) {
            return <Redirect to={PATH.browse} />;
          }
          return component || children;
        }

        if (hasValidToken()) {
          fetchCurrentUser(previousPath);
          return null;
        }

        return component || children;
      }}
    </Route>
  );
};

export default PublicRoute;
