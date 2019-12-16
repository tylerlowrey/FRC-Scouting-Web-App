package org.team283.frcscoutingwebapp.models;

import com.vladmihalcea.hibernate.type.json.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;

@Entity(name = "pit_scouting_data_dev")
@TypeDef(name = "json", typeClass = JsonStringType.class)
public class PitScoutingRecord
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Long recordID;

    @ManyToOne
    @JoinColumn(name = "team_number", nullable = false)
    private FRCTeam teamNumber;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private RoboticsEvent event;

    @Type(type = "json")
    @Column(name = "form_data", columnDefinition = "json")
    private String formData;

    public PitScoutingRecord()
    {

    }

    public Long getRecordID()
    {
        return recordID;
    }

    public void setRecordID(Long recordID)
    {
        this.recordID = recordID;
    }

    public FRCTeam getTeamNumber()
    {
        return teamNumber;
    }

    public void setTeamNumber(FRCTeam teamNumber)
    {
        this.teamNumber = teamNumber;
    }

    public RoboticsEvent getEvent()
    {
        return event;
    }

    public void setEvent(RoboticsEvent event)
    {
        this.event = event;
    }

    public String getFormData()
    {
        return formData;
    }

    public void setFormData(String formData)
    {
        this.formData = formData;
    }
}
