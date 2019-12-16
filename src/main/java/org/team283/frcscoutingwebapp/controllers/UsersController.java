package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.team283.frcscoutingwebapp.models.User;
import org.team283.frcscoutingwebapp.repositories.UserRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UsersController
{
    @Autowired
    private UserRepo userRepo;

    @GetMapping
    public List<User> list()
    {
        return userRepo.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public User get(@PathVariable Long id)
    {
        return userRepo.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User create(@RequestBody final User user)
    {
        return userRepo.saveAndFlush(user);
    }

    //TODO: Implement PATCH endpoint

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public User update(@PathVariable Long id, @RequestBody final User user)
    {
        //TODO: Add validation that checks that all attributes are listed in the JSON object. Return 400 bad payload if not
        User existingUser = userRepo.getOne(id);
        BeanUtils.copyProperties(user, existingUser, "userID");
        return userRepo.saveAndFlush(user);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id)
    {
        //TODO: Also need to delete entries in user_roles
        userRepo.deleteById(id);
    }

}
