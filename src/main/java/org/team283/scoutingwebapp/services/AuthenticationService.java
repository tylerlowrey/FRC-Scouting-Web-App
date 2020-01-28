package org.team283.scoutingwebapp.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Date;

public class AuthenticationService
{
    //86,400,000 is the number of milliseconds in a day
    public static final long EXPIRATION_TIME = 86_400_000;
    public static final String SIGNING_KEY = "c2VjcmV0";
    public static final String PREFIX = "Bearer";

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


            String user = Jwts.parser()
                            .setSigningKey(SIGNING_KEY.getBytes(StandardCharsets.UTF_8))
                            .parseClaimsJws(token.replace(PREFIX, ""))
                            .getBody()
                            .getSubject();

            if(user != null)
            {
                return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
            }
        }

        return null;
    }

}
