package com.aptech.cinema.controller;

import com.aptech.cinema.DTO.LoginRequestDTO;
import com.aptech.cinema.DTO.LoginResponseDTO;
import com.aptech.cinema.DTO.UserDTO;
import com.aptech.cinema.enums.Role;
import com.aptech.cinema.exception.BadRequestException;
import com.aptech.cinema.exception.HttpException;
import com.aptech.cinema.exception.InternalServerException;
import com.aptech.cinema.model.User;
import com.aptech.cinema.service.UserService;
import com.aptech.cinema.util.AuthUtils;
import com.aptech.cinema.util.GeneralUtils;
import com.aptech.cinema.util.TokenUtils;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserController {
    private final AuthenticationManager authenticationManager;
    private final TokenUtils tokenUtils;
    private final UserService userService;
    private final ModelMapper modelMapper;
    private final AuthUtils authUtils;

    @PostMapping({"/login"})
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequestDTO, Errors errors) {
        if (errors.hasErrors()) {
            throw new BadRequestException(GeneralUtils.processValidationError(errors));
        }

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginRequestDTO.getUsername(),
                    loginRequestDTO.getPassword()
            ));
            String token = tokenUtils.generateToken(authentication);
            return ResponseEntity.ok(new LoginResponseDTO(token));
        } catch (BadCredentialsException ex) {
            throw new BadRequestException("Incorrect username or password");
        } catch (AuthenticationException ex) {
            throw new BadRequestException(ex.getMessage());
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }

    @GetMapping("/user")
    public ResponseEntity<UserDTO> getCurrentUser(){
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            User user = userService.findByUsername(authentication.getName());
            return ResponseEntity.ok(modelMapper.map(user, UserDTO.class));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
    
    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@Valid @RequestBody UserDTO userDTO, Errors errors){
        if (errors.hasErrors()) {
            String errorMessage = GeneralUtils.processValidationError(errors);
            throw new BadRequestException(errorMessage);
        }
        try {
            userDTO.setRole(Role.USER.getValue());
            userDTO.setId(null);
            User user = userService.createUser(userDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(modelMapper.map(user, UserDTO.class));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
    
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody UserDTO userDTO, Errors errors){
        if (errors.hasErrors()) {
            String errorMessage = GeneralUtils.processValidationError(errors);
            throw new BadRequestException(errorMessage);
        }
        
        authUtils.checkIsAdmin();
        
        try {
            userDTO.setId(null);
            User user = userService.createUser(userDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(modelMapper.map(user, UserDTO.class));
        } catch (HttpException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalServerException(ex.getMessage());
        }
    }
}
