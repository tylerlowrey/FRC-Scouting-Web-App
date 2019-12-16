package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.Permission;

public interface PermissionRepo extends JpaRepository<Permission, Long>
{
}
