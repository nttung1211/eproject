package com.aptech.cinema.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(length = 50, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(length = 20, nullable = false)
    private String role;

    @Column(length = 50 , nullable = false)
    private String email;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "user_id")
    private List<View> views = new ArrayList<>();
    
    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Favorite> favorites = new ArrayList<>();
}
