package com.aptech.cinema.service;

import com.aptech.cinema.DTO.FavoriteDTO;
import com.aptech.cinema.model.Favorite;

public interface FavoriteService {
    Favorite findById(Long id);
    Favorite createFavorite(FavoriteDTO favoriteDTO);
    void deleteFavorite(Long id);
}
