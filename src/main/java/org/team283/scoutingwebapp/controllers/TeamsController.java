package org.team283.scoutingwebapp.controllers;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.team283.scoutingwebapp.FrcScoutingWebApplication;
import org.team283.scoutingwebapp.repositories.SettingRepository;

import java.io.IOException;

@RestController
public class TeamsController
{
    @Autowired
    private SettingRepository settingRepository;

    @GetMapping(path = FrcScoutingWebApplication.BASE_API_URL + "/teams", produces = "application/json")
    public String getTeams() throws IOException
    {
        String currentEventKey = settingRepository.findBySettingName("current_event_key").getSettingValue();
        OkHttpClient httpClient = new OkHttpClient();

        Request httpRequest = new Request.Builder()
                .url(FrcScoutingWebApplication.TBA_API_URL + "/event/" + currentEventKey + "/teams")
                .header("X-TBA-Auth-Key", FrcScoutingWebApplication.getTbaApiKey())
                .build();

        try(Response response = httpClient.newCall(httpRequest).execute())
        {
            return response.body().string();
        }
    }

    @GetMapping(value = FrcScoutingWebApplication.BASE_API_URL + "/teams/{teamKey}/tba", produces = "application/json")
    public String getTeamFromKey(@PathVariable String teamKey) throws IOException
    {
        String currentEventKey = settingRepository.findBySettingName("current_event_key").getSettingValue();
        OkHttpClient httpClient = new OkHttpClient();

        Request httpRequest = new Request.Builder()
                //https://thebluealliance.com/api/v3/team/{teamKey}/event/{eventKey}/matches
                .url(FrcScoutingWebApplication.TBA_API_URL + "/team/" + teamKey + "/event/" + currentEventKey + "/matches")
                .header("X-TBA-Auth-Key", FrcScoutingWebApplication.getTbaApiKey())
                .build();

        try(Response response = httpClient.newCall(httpRequest).execute())
        {
            return response.body().string();
        }
    }
}
