import MainPage from '../../pages/mainPage/MainPage';

type AppProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage {...props} />
  );
}

export default App;
