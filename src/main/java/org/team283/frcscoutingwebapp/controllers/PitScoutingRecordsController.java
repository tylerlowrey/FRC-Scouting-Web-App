package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.team283.frcscoutingwebapp.models.PitScoutingRecord;
import org.team283.frcscoutingwebapp.repositories.PitScoutingRecordRepo;

import java.util.List;

@RestController
@RequestMapping("/api/v1/scouting/pit/records")
public class PitScoutingRecordsController
{
    @Autowired
    private PitScoutingRecordRepo pitScoutingRecordRepo;

    @GetMapping
    public List<PitScoutingRecord> list()
    {
        return pitScoutingRecordRepo.findAll();
    }
}
