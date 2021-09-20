package com.aptech.cinema.exception;

import com.aptech.cinema.DTO.ErrorDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(value = {HttpException.class})
    public ResponseEntity<ErrorDTO> httpExceptionHandler(HttpException exception) {
        return ResponseEntity.status(exception.getStatus()).body(new ErrorDTO(exception.getMessage()));
    }
}
