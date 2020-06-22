package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Team
{
    @Id
    private Integer number;
    private String name;
    private String location;
    // The external key assigned to the team by FIRST
    private String externalKey;

}

