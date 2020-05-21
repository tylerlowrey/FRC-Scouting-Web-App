package org.team283.frcscoutingwebapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FrcScoutingWebApplication
{
	@Value("${spring.data.rest.base-path}")
	public static String BASE_API_URL;

	public static void main(String[] args)
	{
		SpringApplication.run(FrcScoutingWebApplication.class, args);
	}
}
