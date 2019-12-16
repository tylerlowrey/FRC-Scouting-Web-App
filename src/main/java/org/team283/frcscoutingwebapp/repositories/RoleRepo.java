package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.Role;

public interface RoleRepo extends JpaRepository<Role, Long>
{
}
