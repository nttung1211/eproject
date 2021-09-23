package com.aptech.cinema.service;

import com.aptech.cinema.DTO.FavoriteDTO;
import com.aptech.cinema.exception.BadRequestException;
import com.aptech.cinema.exception.NotFoundException;
import com.aptech.cinema.model.Favorite;
import com.aptech.cinema.repo.FavoriteRepo;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavoriteServiceImpl implements FavoriteService {
    private final FavoriteRepo favoriteRepo;
    private final UserService userService;
    private final ModelMapper modelMapper;

    @Override
    public Favorite findById(Long id) {
        Optional<Favorite> optionalFavorite = favoriteRepo.findById(id);
        if (optionalFavorite.isEmpty()) {
            throw new NotFoundException("Could not find favorite width id: " + id);
        }
        return optionalFavorite.get();
    }

    @Override
    public Favorite createFavorite(FavoriteDTO favoriteDTO) {
        userService.checkPermission(favoriteDTO.getUserId());
        if (favoriteRepo.existsByFilmIdAndUserId(favoriteDTO.getFilmId(), favoriteDTO.getUserId())) {
            throw new BadRequestException("This user already marked this film as favorite");
        } 
        return favoriteRepo.save(modelMapper.map(favoriteDTO, Favorite.class));
    }

    @Override
    public void deleteFavorite(Long id) {
        Favorite favorite = findById(id);
        userService.checkPermission(favorite.getUser().getId());
        favoriteRepo.deleteById(id);
    }
}
