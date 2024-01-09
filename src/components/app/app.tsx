import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from '../../store';
import {FilmType} from '../../types/film';

export type AppProps = {
  selectedFilm: FilmType;
}

const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

function App(props: AppProps): JSX.Element {
  const { films } = useAppSelector((state) => state);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage selectedFilm={props.selectedFilm} />} />
          <Route path={AppRoute.SignIn} element={<SignIn />} />
          <Route path={AppRoute.Film(':id')} element={<Film films={films} />} />
          <Route path={AppRoute.AddReview(':id')} element={<AddReview film={props.selectedFilm} />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyList films={films}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player(':id')} element={<Player film={props.selectedFilm} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
