package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "robotics_events")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoboticsEvent
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventID;
    private String eventKey;
    private String eventName;
    private String eventLocation;
    private Short eventYear;
}
