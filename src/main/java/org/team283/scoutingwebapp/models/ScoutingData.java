package org.team283.scoutingwebapp.models;

import javax.persistence.*;

@Entity
@Table(name = "scouting_data")
public class ScoutingData
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private long timestamp;
    @Column(name = "team_key")
    private String teamKey;
    @Column(name = "event_key")
    private String eventKey;
    @Column(name = "photo_filename")
    private String photoFilename;
    @Column(name = "form_type")
    private String formType;
    @Column(name = "form_data")
    private String formData;

    public ScoutingData() {}

    public ScoutingData(String username, long timestamp, String teamKey, String eventKey,
                        String photoFilename, String formType, String formData)
    {
        this.username = username;
        this.timestamp = timestamp;
        this.teamKey = teamKey;
        this.eventKey = eventKey;
        this.photoFilename = photoFilename;
        this.formType = formType;
        this.formData = formData;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public long getTimestamp()
    {
        return timestamp;
    }

    public void setTimestamp(long timestamp)
    {
        this.timestamp = timestamp;
    }

    public String getTeamKey()
    {
        return teamKey;
    }

    public void setTeamKey(String teamKey)
    {
        this.teamKey = teamKey;
    }

    public String getEventKey()
    {
        return eventKey;
    }

    public void setEventKey(String eventKey)
    {
        this.eventKey = eventKey;
    }

    public String getPhotoFilename()
    {
        return photoFilename;
    }

    public void setPhotoFilename(String photoFilename)
    {
        this.photoFilename = photoFilename;
    }

    public String getFormType()
    {
        return formType;
    }

    public void setFormType(String formType)
    {
        this.formType = formType;
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
