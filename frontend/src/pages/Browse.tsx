import React, { FC, useEffect, useState } from 'react';
import logo from '../../src/logo.svg';
import Card from '../components/card/Card';
import { CardRowContainer, CardRowTitle } from '../components/card/Card.styled';
import CardContainer from '../components/card/CardContainer';
import CardFeature from '../components/card/CardFeature';
import CardRow from '../components/card/CardRow';
import Footer from '../components/footer/Footer';
import Header, { HeaderLogo } from '../components/header/Header';
import {
  HeaderButtonLink,
  HeaderFeature,
  HeaderFeatureCallOut,
  HeaderFrame,
  HeaderPlayButton,
  HeaderText,
} from '../components/header/Header.styled';
import Player from '../components/Player/Player';
import PATH from '../constants/path';
import { useAppContext } from '../context/AppContext';
import Film from '../models/Film';
import Genre from '../models/Genre';
import filmService from '../services/filmService';
import { capitalize } from '../utils/helpers';

interface Props {}

const Browse: FC<Props> = () => {
  const [rowDataItems, setRowDataItems] = useState<{ genre: Genre; films: Film[] }[]>([]);
  const { setShowPlayer, setPlayingFilm, currentUser } = useAppContext();

  const onPlaySpotlightFilm = () => {
    const spotlightFilm = rowDataItems
      .filter((item) => item.genre.name === 'thriller')[0]
      .films.filter((film) => film.title === 'Joker')[0];
    setPlayingFilm(spotlightFilm);
    setShowPlayer((prev) => !prev);
  };

  // const getRows = async () => {
  //   const data = await filmService.getBrowseData(10);
  //   setRowDataItems(data);
  // };

  useEffect(() => {
    // if (currentUser) {
    //   getRows();
    // }
    let isMounted = true;
    filmService.getBrowseData(10).then((data) => {
      if (isMounted) {
        setRowDataItems(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  return (
    <>
      <Header slug="joker">
        <HeaderFrame>
          <HeaderLogo to={PATH.home} src={logo} alt="Cine" />
          <HeaderButtonLink to={PATH.signOut}>Sign Out</HeaderButtonLink>
        </HeaderFrame>
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

      <CardRowContainer>
        {rowDataItems.map((rowData) => {
          return (
            <CardRow key={rowData.genre.id}>
              <CardRowTitle>{capitalize(rowData.genre.name)}</CardRowTitle>
              <CardContainer>
                {rowData.films.map((film) => {
                  return <Card key={film.id} item={film} />;
                })}
              </CardContainer>
              <CardFeature />
            </CardRow>
          );
        })}
      </CardRowContainer>
      <Player />
      <Footer />
    </>
  );
};

export default Browse;
