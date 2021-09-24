package com.aptech.cinema.controller;

import com.aptech.cinema.DTO.CategorizedFilmsDTO;
import com.aptech.cinema.exception.HttpException;
import com.aptech.cinema.exception.InternalServerException;
import com.aptech.cinema.model.Film;
import com.aptech.cinema.model.Genre;
import com.aptech.cinema.model.User;
import com.aptech.cinema.service.FilmService;
import com.aptech.cinema.service.GenreService;
import com.aptech.cinema.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/films")
public class FilmController {
    private final FilmService filmService;
    private final GenreService genreService;
    private final UserService userService;

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

    @GetMapping("/{genre}")
    public ResponseEntity<Page<Film>> getFilmsByGenre(@PathVariable("genre") String genreName, @RequestParam int page, @RequestParam int size, @RequestParam String sortBy) {
        try {
            Genre genre = genreService.findByName(genreName);
            return ResponseEntity.ok(filmService.findAllByGenres(genre, page - 1, size, sortBy));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
    
    @GetMapping("/favorites")
    public ResponseEntity<Page<Film>> getFavoriteFilms(@RequestParam int page, @RequestParam int size, @RequestParam String sortBy) {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            User user = userService.findByUsername(username);
            return ResponseEntity.ok(filmService.findFavoriteFilmsByUserId(user.getId(), page - 1, size, sortBy));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
}
