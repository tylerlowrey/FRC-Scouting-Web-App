package org.team283.scoutingwebapp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.team283.scoutingwebapp.repositories.ScoutingDataRepository;


@DataJpaTest
public class ScoutingDataRepositoryTest
{
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ScoutingDataRepository scoutingDataRepository;

    @Test
    void createScoutingData()
    {
        //Do the thing
    }

    @Test
    void readScoutingData()
    {
        //Do the thing
    }

    @Test
    void updateScoutingData()
    {
        //Do the thing
    }

    @Test
    void deleteScoutingData()
    {
        //Do the thing
    }

}
