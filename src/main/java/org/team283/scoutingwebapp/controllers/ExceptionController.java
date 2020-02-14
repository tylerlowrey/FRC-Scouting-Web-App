package org.team283.scoutingwebapp.controllers;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ExceptionController extends ResponseEntityExceptionHandler
{
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Expired Access Token")
    @ExceptionHandler(ExpiredJwtException.class)
    public void handleUnauthorized(HttpServletRequest request, Exception ex)
    {
        //Send HTTP 403 Unauthorized response
    }
}
