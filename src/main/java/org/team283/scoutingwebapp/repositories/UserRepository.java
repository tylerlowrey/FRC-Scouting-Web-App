package org.team283.scoutingwebapp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.team283.scoutingwebapp.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>
{
    User findByUsername(String username);
    User findByEmail(String email);
}
