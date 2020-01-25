package org.team283.frcscoutingwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.team283.frcscoutingwebapp.storage.StorageProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class FrcScoutingWebApplication
{
	public static void main(String[] args)
	{
		SpringApplication.run(FrcScoutingWebApplication.class, args);
	}
}
