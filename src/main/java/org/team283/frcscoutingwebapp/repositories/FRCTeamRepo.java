package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.FRCTeam;

public interface FRCTeamRepo extends JpaRepository<FRCTeam, Long>
{
}
