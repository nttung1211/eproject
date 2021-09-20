package com.aptech.cinema.service;

import com.aptech.cinema.model.Film;
import com.aptech.cinema.repo.FilmRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FilmServiceImpl implements FilmService {
    private final FilmRepo filmRepo;
    
    @Override
    public List<Film> findAllByGenres(Long genreId, int page, int size, String sortBy, List<Long> exludedFilmIds) {
        int offset = page * size;
        return filmRepo.findAllByGenres(genreId, offset, size, sortBy, exludedFilmIds);
    }
    
}
