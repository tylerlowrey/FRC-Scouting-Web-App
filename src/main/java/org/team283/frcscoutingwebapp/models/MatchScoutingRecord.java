package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;

@Entity(name = "match_scouting_data")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MatchScoutingRecord
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recordID;
    @ManyToOne
    private FRCTeam teamNumber;
    @ManyToOne
    private RoboticsEvent event;
    private Short matchNumber;
    @Type(type = "json")
    @Column(name = "form_data", columnDefinition = "json")
    private String formData;

}
