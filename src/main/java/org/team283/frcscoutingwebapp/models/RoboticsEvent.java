package org.team283.frcscoutingwebapp.models;

import javax.persistence.*;

@Entity(name = "robotics_events")
public class RoboticsEvent
{
    @Id
    @Column(name = "event_key")
    private String eventKey;
    @Column(name = "event_name")
    private String eventName;
    @Column(name = "event_location")
    private String eventLocation;
    @Column(name = "event_year")
    private Short eventYear;

    public RoboticsEvent()
    {

    }

    public String getEventKey()
    {
        return eventKey;
    }

    public void setEventKey(String eventKey)
    {
        this.eventKey = eventKey;
    }

    public String getEventName()
    {
        return eventName;
    }

    public void setEventName(String eventName)
    {
        this.eventName = eventName;
    }

    public String getEventLocation()
    {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation)
    {
        this.eventLocation = eventLocation;
    }

    public Short getEventYear()
    {
        return eventYear;
    }

    public void setEventYear(Short eventYear)
    {
        this.eventYear = eventYear;
    }
}
