import queryString from 'query-string';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilteredFilms from '../components/FilteredFilms';
import { useAppContext } from '../context/AppContext';
import Film from '../models/Film';
import filmService from '../services/filmService';

interface Props {}

const FavoriteFilms: FC<Props> = () => {
  const location = useLocation();
  const { currentUser } = useAppContext();
  const [films, setFilms] = useState<Film[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const page = useMemo(() => queryString.parse(location.search).page, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
    filmService.getFavoriteFilms(+(page || 1)).then((data) => {
      setFilms(data.content);
      setTotalPages(data.totalPages);
    });
  }, [page]);

  useEffect(() => {
    if (currentUser) {
      setFilms((prev) =>
        prev.filter((film) => currentUser!.favorites!.map((fav) => fav.filmId).includes(film.id!))
      );
    }
  }, [currentUser, setFilms]);

  return (
    <FilteredFilms
      title="Favorites"
      films={films}
      totalPages={totalPages}
      page={page ? +page : undefined}
    />
  )
};

export default FavoriteFilms;
