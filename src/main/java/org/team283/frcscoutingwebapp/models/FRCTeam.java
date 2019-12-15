package org.team283.frcscoutingwebapp.models;

import javax.persistence.*;

@Entity(name = "frc_teams")
public class FRCTeam
{
    @Id
    @Column(name = "team_number")
    private Integer teamNumber;
    @Column(name = "team_name")
    private String teamName;
    @Column(name = "team_location")
    private String teamLocation;
    @Column(name = "team_key")
    private String team_key;

    public FRCTeam()
    {

    }

    public Integer getTeamNumber()
    {
        return teamNumber;
    }

    public void setTeamNumber(Integer teamNumber)
    {
        this.teamNumber = teamNumber;
    }

    public String getTeamName()
    {
        return teamName;
    }

    public void setTeamName(String teamName)
    {
        this.teamName = teamName;
    }

    public String getTeamLocation()
    {
        return teamLocation;
    }

    public void setTeamLocation(String teamLocation)
    {
        this.teamLocation = teamLocation;
    }

    public String getTeam_key()
    {
        return team_key;
    }

    public void setTeam_key(String team_key)
    {
        this.team_key = team_key;
    }
}
