package org.team283.scoutingwebapp;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.team283.scoutingwebapp.models.AccountCredentials;
import org.team283.scoutingwebapp.services.AuthenticationService;


import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

public class LoginFilter extends AbstractAuthenticationProcessingFilter
{
    public LoginFilter(String url, AuthenticationManager authManager)
    {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException
    {
        AccountCredentials credentials = new ObjectMapper().readValue(request.getInputStream(), AccountCredentials.class);

        return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(credentials.getUsername(),
                                                                                               credentials.getPassword(),
                                                                                               Collections.emptyList()));
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain filterChain, Authentication authentication)
                                            throws IOException, ServletException
    {
        AuthenticationService.addToken(response, authentication.getName());
    }

}
