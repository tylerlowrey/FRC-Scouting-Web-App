package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team283.frcscoutingwebapp.models.MatchScoutingRecord;
import org.team283.frcscoutingwebapp.repositories.MatchScoutingRecordRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/scouting/match/records")
public class MatchScoutingRecordsController
{
    @Autowired
    private MatchScoutingRecordRepo matchScoutingRecordRepo;

    @GetMapping
    public List<MatchScoutingRecord> list()
    {
        return matchScoutingRecordRepo.findAll();
    }
}
