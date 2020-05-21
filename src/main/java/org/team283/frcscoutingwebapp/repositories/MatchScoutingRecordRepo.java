package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.team283.frcscoutingwebapp.models.MatchScoutingRecord;

@RepositoryRestResource
public interface MatchScoutingRecordRepo extends JpaRepository<MatchScoutingRecord, Long>
{
}
