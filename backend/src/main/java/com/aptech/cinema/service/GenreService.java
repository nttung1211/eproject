package com.aptech.cinema.service;

import com.aptech.cinema.model.Genre;

import java.util.List;

public interface GenreService {
    List<Genre> findAll();
    Genre findById(Long id);
}
