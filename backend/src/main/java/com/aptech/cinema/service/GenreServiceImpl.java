package com.aptech.cinema.service;

import com.aptech.cinema.exception.NotFoundException;
import com.aptech.cinema.model.Genre;
import com.aptech.cinema.repo.GenreRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GenreServiceImpl implements GenreService {
    private final GenreRepo genreRepo;
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<Genre> findAll() {
        return genreRepo.findAll();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Genre findById(Long id) {
        Optional<Genre> optionalGenre = genreRepo.findById(id);
        if (optionalGenre.isEmpty()) {
            throw new NotFoundException("Could not find genre with id: " + id);
        }
        return optionalGenre.get();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Genre findByName(String name) {
        Optional<Genre> optionalGenre = genreRepo.findByName(name);
        if (optionalGenre.isEmpty()) {
            throw new NotFoundException("Could not find genre with name: " + name);
        }
        return optionalGenre.get();
    }
}
