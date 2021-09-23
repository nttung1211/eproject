package com.aptech.cinema.repo;

import com.aptech.cinema.model.Film;
import com.aptech.cinema.model.Genre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepo extends JpaRepository<Film, Long> {
    Page<Film> findAllByGenres(Genre genre, Pageable pageable);
    
    @Query(
            nativeQuery = true,
            value = "select * from film f " +
                    "join film_genre fg on f.id = fg.film_id " +
                    "where fg.genre_id = :genre_id " +
                    "and f.id not in (:exluded_film_ids) " +
                    "order by :sort_by " +
                    "limit :size offset :offset"
    )
    List<Film> findAllByGenres(
        @Param("genre_id") Long genreId,
        @Param("offset") int offset,
        @Param("size") int size, 
        @Param("sort_by") String sortBy,
        @Param("exluded_film_ids") List<Long>exludedFilmIds
    );
}
