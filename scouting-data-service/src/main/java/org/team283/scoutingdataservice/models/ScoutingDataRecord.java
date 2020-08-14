package org.team283.scoutingdataservice.models;

import javax.persistence.*;

@Entity
public class ScoutingDataRecord
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private ScoutingDataHeaderDefinition headerDefinition;
    /**
     * A valid JSON String containing a single JSON object representing the data (must match the headerDefinition)
     */
    private String data;

    public void setId(Long id)
    {
        this.id = id;
    }

    @Id
    public Long getId()
    {
        return id;
    }

    public ScoutingDataHeaderDefinition getHeaderDefinition()
    {
        return headerDefinition;
    }

    public void setHeaderDefinition(ScoutingDataHeaderDefinition headerDefinition)
    {
        this.headerDefinition = headerDefinition;
    }

    public String getData()
    {
        return data;
    }

    public void setData(String data)
    {
        this.data = data;
    }
}
