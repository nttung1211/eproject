import { Pagination, PaginationItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../src/logo.svg';
import PATH from '../constants/path';
import { useAppContext } from '../context/AppContext';
import Film from '../models/Film';
import genreService from '../services/genreService';
import { capitalize } from '../utils/helpers';
import Card from './card/Card';
import { CardRow, CardRowTitle } from './card/Card.styled';
import CardContainer from './card/CardContainer';
import CardFeature from './card/CardFeature';
import CardRowContainer from './card/CardRowContainer';
import Footer from './footer/Footer';
import Header, { HeaderLogo } from './header/Header';
import { HeaderButtonLink, HeaderNavBar, HeaderNavBarFraction } from './header/Header.styled';
import HeaderMenu from './header/HeaderMenu';
import Player from './Player/Player';

interface Props {
  title: string;
  films: Film[];
  page?: number;
  totalPages: number;
  isEmpty?: boolean;
}

const FilteredFilms: FC<Props> = ({ title, films, page = 1, totalPages, isEmpty }) => {
  const location = useLocation();
  const { genres, setGenres } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (genres.length === 0) {
      genreService.getAllGenres().then((data) => {
        setGenres(data);
      });
    }
  }, [setGenres, genres]);

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
                  path: PATH.genre.replace(':genre', genre.name),
                };
              })}
            />
            <HeaderMenu title="Favorites" path={PATH.favorites} />
          </HeaderNavBarFraction>
          <HeaderNavBarFraction>
            <HeaderButtonLink to={PATH.signOut}>Sign Out</HeaderButtonLink>
          </HeaderNavBarFraction>
        </HeaderNavBar>

        {!isEmpty ? (
          <>
            <CardRowContainer marginTop={100}>
              <CardRow>
                <CardRowTitle>{capitalize(title)}</CardRowTitle>
                <CardContainer stack>
                  {films.map((film) => {
                    return <Card key={film.id} item={film} />;
                  })}
                </CardContainer>
              </CardRow>

              <CardFeature />
            </CardRowContainer>

            <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
              <Pagination
                className="darkBackground"
                shape="rounded"
                count={totalPages}
                page={page}
                renderItem={(item) => {
                  return (
                    <PaginationItem
                      component={Link}
                      to={`${location.pathname.replace(/\?page=[0-9]+$/, '')}?${
                        item.page === 1 ? '' : `page=${item.page}`
                      }`}
                      {...item}
                    />
                  );
                }}
              />
            </Box>
          </>
        ) : (
          <Typography
            sx={{
              color: '#eeeeee',
              fontSize: 40,
              textAlign: 'center',
              fontWeight: 'bold',
              margin: '50px',
            }}
          >
            No film found
          </Typography>
        )}
      </Header>

      <Player />
      <Footer />
    </>
  );
};

export default FilteredFilms;
