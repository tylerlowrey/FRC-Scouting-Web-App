package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.RoboticsEvent;

public interface RoboticsEventRepo extends JpaRepository<RoboticsEvent, Long>
{
}
