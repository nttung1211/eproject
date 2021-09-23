import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../../src/logo.svg';
import Card from '../components/card/Card';
import { CardRow, CardRowTitle } from '../components/card/Card.styled';
import CardContainer from '../components/card/CardContainer';
import CardFeature from '../components/card/CardFeature';
import CardRowContainer from '../components/card/CardRowContainer';
import Footer from '../components/footer/Footer';
import Header, { HeaderLogo } from '../components/header/Header';
import {
  HeaderButtonLink,
  HeaderFeature,
  HeaderFeatureCallOut,
  HeaderNavBar,
  HeaderNavBarFraction,
  HeaderPlayButton,
  HeaderText,
} from '../components/header/Header.styled';
import HeaderMenu from '../components/header/HeaderMenu';
import Player from '../components/Player/Player';
import PATH from '../constants/path';
import { useAppContext } from '../context/AppContext';
import Film from '../models/Film';
import Genre from '../models/Genre';
import filmService from '../services/filmService';
import { capitalize } from '../utils/helpers';

interface Props {}

const Browse: FC<Props> = () => {
  const history = useHistory();
  const [rowDataItems, setRowDataItems] = useState<{ genre: Genre; films: Film[] }[]>([]);
  const { setShowPlayer, setPlayingFilm } = useAppContext();

  const onPlaySpotlightFilm = () => {
    const spotlightFilm = rowDataItems
      .filter((item) => item.genre.name === 'thriller')[0]
      .films.filter((film) => film.title === 'Joker')[0];
    setPlayingFilm(spotlightFilm);
    setShowPlayer((prev) => !prev);
  };

  useEffect(() => {
    let isMounted = true;
    filmService.getBrowseData(10).then((data) => {
      if (isMounted) {
        setRowDataItems(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header slug="joker">
        <HeaderNavBar>
          <HeaderNavBarFraction>
            <HeaderLogo to={PATH.home} src={logo} alt="Cine" />
            <HeaderMenu
              title="Genre"
              items={rowDataItems.map((rowDataItem) => {
                return {
                  name: rowDataItem.genre.name,
                  path: PATH.filter.replace(':condition', rowDataItem.genre.name),
                };
              })}
            />
          </HeaderNavBarFraction>
          <HeaderNavBarFraction>
            <HeaderButtonLink to={PATH.signOut}>Sign Out</HeaderButtonLink>
          </HeaderNavBarFraction>
        </HeaderNavBar>
        <HeaderFeature>
          <HeaderFeatureCallOut>Watch Joker Now</HeaderFeatureCallOut>
          <HeaderText>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
            streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a
            clown, and the guise he projects in a futile attempt to feel like he's part of the world
            around him.
          </HeaderText>
          <HeaderPlayButton onClick={onPlaySpotlightFilm}>Play</HeaderPlayButton>
        </HeaderFeature>
      </Header>

      <CardRowContainer marginTop={-100}>
        {rowDataItems.map((rowData) => {
          return (
            <CardRow key={rowData.genre.id}>
              <CardRowTitle
                clickable
                onClick={() => {
                  history.push(PATH.filter.replace(':condition', rowData.genre.name));
                }}
              >
                {capitalize(rowData.genre.name)}
              </CardRowTitle>
              <CardContainer>
                {rowData.films.map((film) => {
                  return <Card key={film.id} item={film} />;
                })}
              </CardContainer>
            </CardRow>
          );
        })}
        <CardFeature />
      </CardRowContainer>
      <Player />
      <Footer />
    </>
  );
};

export default Browse;
