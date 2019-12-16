package org.team283.frcscoutingwebapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.team283.frcscoutingwebapp.models.PitScoutingRecord;

public interface PitScoutingRecordRepo extends JpaRepository<PitScoutingRecord, Long>
{
}
