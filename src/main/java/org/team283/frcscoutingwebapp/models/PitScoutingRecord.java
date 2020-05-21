package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;

@Entity(name = "pit_scouting_data")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PitScoutingRecord
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recordID;
    @ManyToOne
    private FRCTeam teamNumber;
    @ManyToOne
    private RoboticsEvent event;
    private String formData;
}
