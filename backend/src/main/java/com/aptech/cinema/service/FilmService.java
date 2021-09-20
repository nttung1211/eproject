package com.aptech.cinema.service;

import com.aptech.cinema.model.Film;

import java.util.List;

public interface FilmService {
//    List<Film> findAllByGenres(Long genreId, int page, int size, String sortBy);
    public List<Film> findAllByGenres(Long genreId, int page, int size, String sortBy, List<Long> exludedFilmIds);
}
