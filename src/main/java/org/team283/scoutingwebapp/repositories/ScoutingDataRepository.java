package org.team283.scoutingwebapp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.team283.scoutingwebapp.models.ScoutingData;

@RepositoryRestResource(path = "scoutingData", itemResourceRel = "scoutingDataRecord",
                        collectionResourceRel = "scoutingData")
public interface ScoutingDataRepository extends CrudRepository<ScoutingData, Long>
{
}
