package org.team283.scoutingwebapp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.team283.scoutingwebapp.controllers.ScoutingDataController;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
class FrcScoutingWebApplicationTests
{
	private ScoutingDataController scoutingDataController;

	@Test
	void contextLoads() {
		assertThat(scoutingDataController).isNotNull();
	}


}
