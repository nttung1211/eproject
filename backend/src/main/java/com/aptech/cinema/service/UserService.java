package com.aptech.cinema.service;

import com.aptech.cinema.DTO.UserDTO;
import com.aptech.cinema.model.User;

public interface UserService {
    User findByUsername(String username);
    User createUser(UserDTO userDTO);
    void checkPermission(Long userId);
}
