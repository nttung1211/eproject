import queryString from 'query-string';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FilteredFilms from '../components/FilteredFilms';
import Film from '../models/Film';
import filmService from '../services/filmService';

interface Props {}

const FilmsByGenre: FC<Props> = () => {
  const location = useLocation();

  const [films, setFilms] = useState<Film[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { genre: genreName } = useParams<{ genre: string }>();

  const page = useMemo(() => queryString.parse(location.search).page, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);

    filmService.getFilmsByGenre(genreName, +(page || 1)).then((data) => {
      setFilms(data.content);
      setTotalPages(data.totalPages);
    });
  }, [genreName, page]);

  return (
    <FilteredFilms
      title={genreName}
      films={films}
      totalPages={totalPages}
      page={page ? +page : undefined}
    />
  );
};

export default FilmsByGenre;
