package org.team283.scoutingwebapp.models;

import javax.persistence.*;

@Entity
@Table(name = "settings")
public class Setting
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "setting_name")
    private String settingName;

    @Column(name = "setting_value" )
    private String settingValue;

    public Setting() {}

    public Setting(String settingName, String settingValue)
    {
        super();
        this.settingName = settingName;
        this.settingValue = settingValue;
    }

    public Long getId()
    {
        return id;
    }

    public String getSettingName()
    {
        return settingName;
    }

    public void setSettingName(String settingName)
    {
        this.settingName = settingName;
    }

    public String getSettingValue()
    {
        return settingValue;
    }

    public void setSettingValue(String settingValue)
    {
        this.settingValue = settingValue;
    }
}
