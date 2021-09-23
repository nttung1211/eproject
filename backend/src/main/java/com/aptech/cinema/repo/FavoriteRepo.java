package com.aptech.cinema.repo;

import com.aptech.cinema.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepo extends JpaRepository<Favorite, Long> {
    boolean existsByFilmIdAndUserId(Long filmId, Long userId);
}
