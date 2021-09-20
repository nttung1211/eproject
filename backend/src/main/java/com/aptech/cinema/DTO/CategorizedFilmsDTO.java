package com.aptech.cinema.DTO;

import com.aptech.cinema.model.Film;
import com.aptech.cinema.model.Genre;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategorizedFilmsDTO {
    private Genre genre;
    List<Film> films;
}
