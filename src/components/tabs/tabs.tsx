import { FilmType } from '../../types/film.ts';
import { useState } from 'react';
import OverviewTab from '../../components/tabs/overview-tab.tsx';
import DetailsTab from '../../components/tabs/details-tab.tsx';
import ReviewsTab from '../../components/tabs/reviews-tab.tsx';

interface TabsProps {
  film: FilmType;
}

interface FilmNavProps {
  title: string;
  view: JSX.Element;
}

const Tabs = ({ film }: TabsProps) => {
  const [titleNav, setTitleNav] = useState('Overview');
  const filmNav: FilmNavProps[] = [
    {
      title: 'Overview',
      view: <OverviewTab film={film} />,
    },
    {
      title: 'Details',
      view: <DetailsTab film={film} />,
    },
    {
      title: 'Reviews',
      view: <ReviewsTab film={film} />,
    },
  ];
  const activeNav = filmNav.filter(({ title }) => title === titleNav)[0];
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {filmNav.map((nav) => (
            <li
              key={`key_${nav.title}`}
              className={`film-nav__item ${
                nav.title === titleNav ? 'film-nav__item--active' : ''
              }`}
              onClick={() => setTitleNav(nav.title)}
            >
              <a className="film-nav__link">{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {activeNav.view}
    </div>
  );
};

export default Tabs;
