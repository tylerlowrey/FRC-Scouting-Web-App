package org.team283.frcscoutingwebapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity(name = "roles")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long roleID;
    @Column(name = "role_name")
    private String roleName;
    @Column(name = "role_description")
    private String roleDescription;
    @OneToMany
    private List<Permission> permissions;
}
