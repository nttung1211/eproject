import React, { FC, useEffect, useMemo, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Card from '../components/card/Card';
import { CardRow, CardRowTitle } from '../components/card/Card.styled';
import CardContainer from '../components/card/CardContainer';
import CardFeature from '../components/card/CardFeature';
import Footer from '../components/footer/Footer';
import Header, { HeaderLogo } from '../components/header/Header';
import { HeaderNavBar, HeaderButtonLink, HeaderNavBarFraction } from '../components/header/Header.styled';
import Player from '../components/Player/Player';
import PATH from '../constants/path';
import Film from '../models/Film';
import filmService from '../services/filmService';
import { capitalize } from '../utils/helpers';
import logo from '../../src/logo.svg';
import CardRowContainer from '../components/card/CardRowContainer';
import { Pagination, PaginationItem } from '@mui/material';
import { Box } from '@mui/system';
import queryString from 'query-string'
import HeaderMenu from '../components/header/HeaderMenu';
import { useAppContext } from '../context/AppContext';
import genreService from '../services/genreService';

interface Props {}

const FilteredFilms: FC<Props> = () => {
  const { condition } = useParams<{ condition: string }>();
  const location = useLocation();
  const [films, setFilms] = useState<Film[]>([]);
  const { genres, setGenres } = useAppContext();
  const page = useMemo(() => queryString.parse(location.search).page, [location.search]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (genres.length === 0) {
      genreService.getAllGenres().then((data) => {
        setGenres(data);
      })
    }

    let isMounted = true;
    filmService.getFilteredFilms(condition, +(page || 1)).then((data) => {
      if (isMounted) {
        setFilms(data.content);
        setTotalPages(data.totalPages)
      }
    });

    return () => {
      isMounted = false;
    };
  }, [condition, page, genres, setGenres]);

  return (
    <>
      <Header>
      <HeaderNavBar>
          <HeaderNavBarFraction>
            <HeaderLogo to={PATH.home} src={logo} alt="Cine" />
            <HeaderMenu
              title="Genre"
              items={genres.map((genre) => {
                return {
                  name: genre.name,
                  path: PATH.filter.replace(':condition', genre.name),
                };
              })}
            />
          </HeaderNavBarFraction>
          <HeaderNavBarFraction>
            <HeaderButtonLink to={PATH.signOut}>Sign Out</HeaderButtonLink>
          </HeaderNavBarFraction>
        </HeaderNavBar>

        <CardRowContainer marginTop={100}>
          <CardRow>
            <CardRowTitle>{capitalize(condition)}</CardRowTitle>
            <CardContainer stack>
              {films.map((film) => {
                return <Card key={film.id} item={film} />;
              })}
            </CardContainer>
          </CardRow>

          <CardFeature />
        </CardRowContainer>

        <Box
          display="flex"
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Pagination
            className="darkBackground"
            shape="rounded"
            count={totalPages}
            page={+(page || 1)}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`${PATH.filter.replace(':condition', condition)}${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        </Box>
      </Header>

      <Player />
      <Footer />
    </>
  );
};

export default FilteredFilms;
