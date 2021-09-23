package com.aptech.cinema.service;

import com.aptech.cinema.model.Film;
import com.aptech.cinema.model.Genre;
import org.springframework.data.domain.Page;

import java.util.List;

public interface FilmService {
    List<Film> findAllByGenres(Long genreId, int page, int size, String sortBy, List<Long> exludedFilmIds);
    Page<Film> findAllByGenres(Genre genre, int page, int size, String sortBy);
}
