package org.team283.frcscoutingwebapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;
    private String username;
    private String userPassword;
    private String firstName;
    private String lastName;
    private String email;
    @ManyToOne
    private Role role;
}
