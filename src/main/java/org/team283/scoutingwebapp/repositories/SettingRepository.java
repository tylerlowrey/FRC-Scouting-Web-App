package org.team283.scoutingwebapp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.team283.scoutingwebapp.models.Setting;

@RepositoryRestResource
public interface SettingRepository extends CrudRepository<Setting, Long>
{
    Setting findBySettingName(String settingName);
}
