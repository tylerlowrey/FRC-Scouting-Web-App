package org.team283.scoutingwebapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.team283.scoutingwebapp.models.User;
import org.team283.scoutingwebapp.repositories.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService
{
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User currentUser;

        try
        {
            currentUser = userRepository.findByUsername(username);
        }
        catch (UsernameNotFoundException e)
        {
            currentUser = userRepository.findByEmail(username);
        }

        UserDetails user = new org.springframework.security.core.userdetails.User(username, currentUser.getPassword(),
                                                                                    true, true, true, true,
                                                                                    AuthorityUtils.createAuthorityList(currentUser.getRole()));

        return user;
    }
}
