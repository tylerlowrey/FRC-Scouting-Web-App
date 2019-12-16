package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team283.frcscoutingwebapp.models.Role;
import org.team283.frcscoutingwebapp.repositories.RoleRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/roles")
public class RolesController
{
    @Autowired
    private RoleRepo roleRepo;

    @GetMapping
    public List<Role> list()
    {
        return roleRepo.findAll();
    }
}
