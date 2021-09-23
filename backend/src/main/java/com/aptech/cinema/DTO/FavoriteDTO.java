package com.aptech.cinema.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteDTO {
    private Long id;

    @NotNull
    private Long filmId;

    @NotNull
    private Long userId;
}
