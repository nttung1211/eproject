import { createBrowserHistory } from 'history';
import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import HTTP_ERROR from './constants/httpError';
import PATH from './constants/path';
import ROLE from './constants/role';
import AppContextProvider from './context/AppContext';
import Browse from './pages/Browse';
import FavoriteFilms from './pages/FavoriteFilms';
import FilmsByGenre from './pages/FilmsByGenre';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';
import { allFrom } from './utils/helpers';

export const history = createBrowserHistory();

const App: FC = () => {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          {/* ***** PUBLIC ROUTES ***** */}
          <PublicRoute exact path={[PATH.signIn]} component={<SignIn />} />
          <PublicRoute exact path={[PATH.signUp]} component={<SignUp />} />
          <PublicRoute exact path={[PATH.signOut]} component={<SignOut />} />
          <PublicRoute exact path={[PATH.home]} component={<Home />} />

          {/* ***** PRIVATE ROUTES ***** */}
          <PrivateRoute
            exact
            path={[PATH.browse]}
            requiredRoles={allFrom(ROLE)}
            component={<Browse />}
          />

          <PrivateRoute
            exact
            path={[PATH.favorites]}
            requiredRoles={allFrom(ROLE)}
            component={<FavoriteFilms />}
          />

          <PrivateRoute
            exact
            path={[PATH.genre]}
            requiredRoles={allFrom(ROLE)}
            component={<FilmsByGenre />}
          />

          {/* ***** ERROR PAGES ***** */}
          <Route exact path={HTTP_ERROR.unauthorized.path}>
            <ErrorPage
              title={HTTP_ERROR.unauthorized.title}
              status={HTTP_ERROR.unauthorized.status}
            />
          </Route>

          <Route exact path={HTTP_ERROR.internalServerError.path}>
            <ErrorPage
              title={HTTP_ERROR.internalServerError.title}
              status={HTTP_ERROR.internalServerError.status}
            />
          </Route>

          <Route>
            <ErrorPage title={HTTP_ERROR.notFound.title} status={HTTP_ERROR.notFound.status} />
          </Route>
        </Switch>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable={false}
        limit={5}
      />
    </AppContextProvider>
  );
};

export default App;
