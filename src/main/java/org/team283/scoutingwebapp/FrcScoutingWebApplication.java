package org.team283.scoutingwebapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.team283.scoutingwebapp.models.ScoutingData;
import org.team283.scoutingwebapp.models.Setting;
import org.team283.scoutingwebapp.models.User;
import org.team283.scoutingwebapp.repositories.ScoutingDataRepository;
import org.team283.scoutingwebapp.repositories.SettingRepository;
import org.team283.scoutingwebapp.repositories.UserRepository;

import java.time.Instant;

@SpringBootApplication
public class FrcScoutingWebApplication
{
	//Must be changed in tandem with the spring.data.rest.base-path
	public static final String BASE_API_URL = "/api/v1";

	public static final String TBA_API_URL = "https://www.thebluealliance.com/api/v3";

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ScoutingDataRepository scoutingDataRepository;
	@Autowired
	private SettingRepository settingRepository;

	private static String TBAApiKey;

	public static void main(String[] args)
	{
		SpringApplication.run(FrcScoutingWebApplication.class, args);
	}


	@Bean
	CommandLineRunner runner() {
		return args -> {
			TBAApiKey = System.getProperty("tba_api_key");

			//TODO: Remove this for production
			long timestamp = Instant.now().getEpochSecond();
			scoutingDataRepository.save(new ScoutingData("tlowrey", timestamp, "", "", "test.jpg",
														"pit", "{'test': 'test'}"));
			scoutingDataRepository.save(new ScoutingData("testuser", timestamp, "", "", null,
														"match", "{'test': 'test'}"));
			scoutingDataRepository.save(new ScoutingData("testuser2", timestamp, "", "", null,
					"match", "{\"test\": \"test\"}"));

			userRepository.save(new User("user", "$2a$10$RKKrqlO0ZWiHxz.P/6ns4ennS4tWk5meIVG2A0PUchl1okHwC2L1C",
							"accounts@tylerlowrey.com", "user"));
			userRepository.save(new User("admin", "$2a$10$RKKrqlO0ZWiHxz.P/6ns4ennS4tWk5meIVG2A0PUchl1okHwC2L1C",
					"contact@tylerlowrey.com", "admin"));

			settingRepository.save(new Setting("current_event_key", "2019scmb"));

		};
	}

	public static String getTbaApiKey()
	{
		return TBAApiKey;
	}
}
