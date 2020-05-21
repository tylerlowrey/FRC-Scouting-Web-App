package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.team283.frcscoutingwebapp.models.RoboticsEvent;

@RepositoryRestResource
public interface RoboticsEventRepo extends JpaRepository<RoboticsEvent, Long>
{
}
