package com.aptech.cinema.service;

import com.aptech.cinema.repo.ViewRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ViewServiceImpl implements ViewService {
    private final ViewRepo viewRepo;
}
