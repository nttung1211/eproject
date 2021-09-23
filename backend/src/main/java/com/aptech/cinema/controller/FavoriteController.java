package com.aptech.cinema.controller;

import com.aptech.cinema.DTO.FavoriteDTO;
import com.aptech.cinema.exception.BadRequestException;
import com.aptech.cinema.exception.HttpException;
import com.aptech.cinema.exception.InternalServerException;
import com.aptech.cinema.model.Favorite;
import com.aptech.cinema.service.FavoriteService;
import com.aptech.cinema.util.GeneralUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/favorites")
public class FavoriteController {
    private final FavoriteService favoriteService;

    @PostMapping
    public ResponseEntity<Favorite> createFavorite(@Valid @RequestBody FavoriteDTO favoriteDTO, Errors errors) {
        if (errors.hasErrors()) {
            String errorMessage = GeneralUtils.processValidationError(errors);
            throw new BadRequestException(errorMessage);
        }
        
        try {
            return ResponseEntity.ok(favoriteService.createFavorite(favoriteDTO));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Favorite> deleteFavorite(@PathVariable Long id) {
        try {
            favoriteService.deleteFavorite(id);
            return ResponseEntity.noContent().build();
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
}
