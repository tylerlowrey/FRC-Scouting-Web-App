package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team283.frcscoutingwebapp.models.RoboticsEvent;
import org.team283.frcscoutingwebapp.repositories.RoboticsEventRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
public class RoboticsEventsController
{
    @Autowired
    private RoboticsEventRepo roboticsEventRepo;

    @GetMapping
    public List<RoboticsEvent> list()
    {
        return roboticsEventRepo.findAll();
    }
}
