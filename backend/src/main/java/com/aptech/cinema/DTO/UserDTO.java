package com.aptech.cinema.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;

    @NotNull
    @Length(max = 20, min = 6)
    private String username;

    @NotNull
    @Length(max = 20, min = 6)
    private String password;
    
    private String role;

    @NotNull
    @Email
    @Length(max = 50)
    private String email;
    
    private List<ViewDTO> views = new ArrayList<>();
    
    private List<FavoriteDTO> favorites = new ArrayList<>();
}
