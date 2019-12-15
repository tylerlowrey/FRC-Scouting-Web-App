package org.team283.frcscoutingwebapp.models;

import javax.persistence.*;

@Entity(name = "permissions")
public class Permission
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "permission_id")
    private Long permissionID;
    @Column(name = "permission_name")
    private String permissionName;
    @Column(name = "permission_description")
    private String permissionDescription;

    public Permission()
    {

    }

    public Long getPermissionID()
    {
        return permissionID;
    }

    public void setPermissionID(Long permissionID)
    {
        this.permissionID = permissionID;
    }

    public String getPermissionName()
    {
        return permissionName;
    }

    public void setPermissionName(String permissionName)
    {
        this.permissionName = permissionName;
    }

    public String getPermissionDescription()
    {
        return permissionDescription;
    }

    public void setPermissionDescription(String permissionDescription)
    {
        this.permissionDescription = permissionDescription;
    }
}
