package org.team283.scoutingwebapp.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.JwtException;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;

public class AuthenticationService
{
    //86,400,000 is the number of milliseconds in a day
    public static final long EXPIRATION_TIME = 86_400_000;
    public static final String SIGNING_KEY = "c2VjcmV0"; //TODO: Move this
    public static final String PREFIX = "Bearer";

    private static Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    public static void addToken(HttpServletResponse response, String username)
    {
        String JWTToken = Jwts.builder().setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SIGNING_KEY.getBytes(StandardCharsets.UTF_8))
                .compact();

        response.addHeader("Authorization", PREFIX + " " + JWTToken);
        response.addHeader("Access-Control-Expose-Headers", "Authorization");
    }

    public static Authentication getAuthentication(HttpServletRequest request)
    {
        String token = request.getHeader("Authorization");
        if(token != null)
        {
            String user = null;
            try
            {
                user = Jwts.parser()
                    .setSigningKey(SIGNING_KEY.getBytes(StandardCharsets.UTF_8))
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
            }
            catch (JwtException e)
            {
                AuthenticationService.logger.info(request.getRemoteAddr() + " caused exception: " + e.toString());
                return null;
            }


            if(user != null)
            {
                return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
            }
        }

        return null;
    }

}
