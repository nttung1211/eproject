package com.aptech.cinema.service;

import com.aptech.cinema.DTO.ViewDTO;

public interface ViewService {
    long countByFilmId(Long userId);
    void createView(ViewDTO viewDTO);
}
