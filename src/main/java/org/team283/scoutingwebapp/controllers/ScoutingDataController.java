package org.team283.scoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.*;
import org.team283.scoutingwebapp.models.ScoutingData;
import org.team283.scoutingwebapp.repositories.ScoutingDataRepository;

import java.util.List;

@RepositoryRestController
public class ScoutingDataController
{
    @Autowired
    private ScoutingDataRepository scoutingDataRepository;

    @RequestMapping(method = RequestMethod.POST, value = "/scoutingData", consumes = "application/json")
    public void addScoutingData(@RequestBody List<ScoutingData> scoutingData)
    {
        for (ScoutingData data: scoutingData)
        {
            scoutingDataRepository.save(data);
        }
    }
}
