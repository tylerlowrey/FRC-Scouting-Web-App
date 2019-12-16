package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team283.frcscoutingwebapp.models.Permission;
import org.team283.frcscoutingwebapp.repositories.PermissionRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/permissions")
public class PermissionsController
{
    @Autowired
    private PermissionRepo permissionRepo;

    @GetMapping
    public List<Permission> list()
    {
        return permissionRepo.findAll();
    }
}
