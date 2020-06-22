package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team283.frcscoutingwebapp.models.Team;
import org.team283.frcscoutingwebapp.repositories.FRCTeamRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/teams")
public class FRCTeamsController
{
    @Autowired
    private FRCTeamRepo frcTeamRepo;

    @GetMapping
    public List<Team> list()
    {
        return frcTeamRepo.findAll();
    }
}
