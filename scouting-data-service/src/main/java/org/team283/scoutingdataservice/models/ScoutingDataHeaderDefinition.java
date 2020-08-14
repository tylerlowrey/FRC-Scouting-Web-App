package org.team283.scoutingdataservice.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ScoutingDataHeaderDefinition
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * A JSON Object string containing the header definitions for the data
     */
    private String headers;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getHeaders()
    {
        return headers;
    }

    public void setHeaders(String headers)
    {
        this.headers = headers;
    }
}
