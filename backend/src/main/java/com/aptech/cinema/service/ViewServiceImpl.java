package com.aptech.cinema.service;

import com.aptech.cinema.DTO.ViewDTO;
import com.aptech.cinema.model.View;
import com.aptech.cinema.repo.ViewRepo;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ViewServiceImpl implements ViewService {
    private final ViewRepo viewRepo;
    private final ModelMapper modelMapper;

    @Override
    public long countByFilmId(Long userId) {
        return viewRepo.countByFilmId(userId);
    }

    @Override
    public void createView(ViewDTO viewDTO) {
        viewRepo.save(modelMapper.map(viewDTO, View.class));
    }
}
