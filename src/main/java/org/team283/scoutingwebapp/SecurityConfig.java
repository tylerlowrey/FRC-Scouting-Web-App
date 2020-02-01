package org.team283.scoutingwebapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.team283.scoutingwebapp.services.UserDetailsServiceImpl;
import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception
    {
        /*
        http.csrf().disable().cors().and().authorizeRequests()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .anyRequest().authenticated()
                .and()
                // Filter for the api/login requests
                .addFilterBefore(new LoginFilter("/login",
                                                 authenticationManager()),
                                 UsernamePasswordAuthenticationFilter.class)
                // Filter for other requests to check JWT in header
                .addFilterBefore(new AuthenticationFilter(),
                                 UsernamePasswordAuthenticationFilter.class); */

        httpSecurity.csrf().disable().cors().and().authorizeRequests().antMatchers(HttpMethod.POST, "/login")
                .permitAll().anyRequest().authenticated().and()
                .addFilterBefore(new LoginFilter("/login", authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new AuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

    }

    @Bean
    CorsConfigurationSource corsConfigurationSource()
    {
        UrlBasedCorsConfigurationSource corsSource = new UrlBasedCorsConfigurationSource();

        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Collections.singletonList("*"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        config.setAllowCredentials(true);
        config.applyPermitDefaultValues();

        corsSource.registerCorsConfiguration("/**", config);

        return corsSource;
    }


    /*
    @Bean
    @Override
    public UserDetailsService userDetailsService()
    {
        UserDetails user = User.withDefaultPasswordEncoder()
                            .username("dev")
                            .password("password")
                            .roles("USER")
                            .build();

        return new InMemoryUserDetailsManager(user);
    }
    */
}
