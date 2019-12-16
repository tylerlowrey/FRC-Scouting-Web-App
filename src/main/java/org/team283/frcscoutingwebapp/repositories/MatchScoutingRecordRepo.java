package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.MatchScoutingRecord;

public interface MatchScoutingRecordRepo extends JpaRepository<MatchScoutingRecord, Long>
{
}
