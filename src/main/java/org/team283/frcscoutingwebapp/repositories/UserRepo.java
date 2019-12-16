package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.User;

public interface UserRepo extends JpaRepository<User, Long>
{
}
