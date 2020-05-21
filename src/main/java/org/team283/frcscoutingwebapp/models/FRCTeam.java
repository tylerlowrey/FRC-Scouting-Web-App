package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "frc_teams")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FRCTeam
{
    @Id
    private Integer teamNumber;
    private String teamName;
    private String teamLocation;
    private String teamKey;

}

