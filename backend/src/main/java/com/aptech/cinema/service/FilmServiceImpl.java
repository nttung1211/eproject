package com.aptech.cinema.service;

import com.aptech.cinema.model.Film;
import com.aptech.cinema.model.Genre;
import com.aptech.cinema.repo.FilmRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FilmServiceImpl implements FilmService {
    private final FilmRepo filmRepo;
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<Film> findAllByGenres(Long genreId, int page, int size, String sortBy, List<Long> exludedFilmIds) {
        int offset = page * size;
        return filmRepo.findAllByGenres(genreId, offset, size, sortBy, exludedFilmIds);
    }
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public Page<Film> findAllByGenres(Genre genre, int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return filmRepo.findAllByGenres(genre, pageable);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Page<Film> findFavoriteFilmsByUserId(Long userId, int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size); // order will not work in repo
        return filmRepo.findFavoriteFilmsByUserId(userId, pageable);
    }
}
