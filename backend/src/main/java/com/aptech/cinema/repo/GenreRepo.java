package com.aptech.cinema.repo;

import com.aptech.cinema.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GenreRepo extends JpaRepository<Genre, Long> {
    Optional<Genre> findByName(String name);
}
