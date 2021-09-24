package com.aptech.cinema.DTO;

import com.aptech.cinema.model.Genre;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FilmDTO {
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NotNull
    private Integer maturity;

    @NotNull
    private String slug;

    private List<Genre> genres = new ArrayList<>();

    private Date createdAt;

    private Date updatedAt;
}
