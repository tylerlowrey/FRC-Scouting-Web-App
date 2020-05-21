package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity(name = "permissions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Permission implements GrantedAuthority
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long permissionID;
    private String authorityID;
    private String permissionName;
    private String permissionDescription;

    @Override
    public String getAuthority()
    {
        return authorityID;
    }
}
