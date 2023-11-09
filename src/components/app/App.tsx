import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../private-route/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import { AppProps } from '../../types/app-props';


function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage {...props} />} />
          <Route path={AppRoute.SignIn} element={<SignIn />} />
          <Route path={AppRoute.Film(':id')} element={<Film film={props.filmsProps[0]} />} />
          <Route path={AppRoute.AddReview(':id')} element={<AddReview film={props.filmsProps[0]} />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyList films={props.filmsProps}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player(':id')} element={<Player {...props.playerProps} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
