package com.aptech.cinema.controller;

import com.aptech.cinema.DTO.CategorizedFilmsDTO;
import com.aptech.cinema.exception.HttpException;
import com.aptech.cinema.exception.InternalServerException;
import com.aptech.cinema.model.Film;
import com.aptech.cinema.model.Genre;
import com.aptech.cinema.service.FilmService;
import com.aptech.cinema.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/films")
public class FilmController {
    private final FilmService filmService;
    private final GenreService genreService;

    @GetMapping("/browse")
    public ResponseEntity<List<CategorizedFilmsDTO>> getBroweData(@RequestParam int size) {
        try {
            List<CategorizedFilmsDTO> categorizedFilmsDTOList = new ArrayList<>();
            List<Film> films = new ArrayList<>();
            List<Genre> genres = genreService.findAll();
            genres.forEach(genre -> {
                List<Long> excludedFilmsIds = new ArrayList<>();
                excludedFilmsIds.add(0L); // SQl operator IN will not work with empty array
                excludedFilmsIds.addAll(films.stream().map(Film::getId).toList());
                List<Film> list = filmService.findAllByGenres(genre.getId(), 0, size, "created_at", excludedFilmsIds);
                films.addAll(list);
                categorizedFilmsDTOList.add(new CategorizedFilmsDTO(genre, list));
            });
            return ResponseEntity.ok(categorizedFilmsDTOList);
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }

    @GetMapping("/browse/filter")
    public ResponseEntity<Page<Film>> getFilmsByGenre(@RequestParam String genreName, @RequestParam int page, @RequestParam int size, @RequestParam String sortBy) {
        try {
            Genre genre = genreService.findByName(genreName);
            return ResponseEntity.ok(filmService.findAllByGenres(genre, page - 1, size, sortBy));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
}
