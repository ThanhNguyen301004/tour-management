package com.example.App_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.File;
import java.nio.file.Files;
import java.util.List;

@SpringBootApplication
public class AppApiApplication {

	public static void main(String[] args) {
		loadEnv();
		SpringApplication.run(AppApiApplication.class, args);
	}

	private static void loadEnv() {
		File[] possibleLocations = new File[] {
			new File(".env"),
			new File("backend/.env")
		};
		for (File file : possibleLocations) {
			if (file.exists() && file.isFile()) {
				try {
					List<String> lines = Files.readAllLines(file.toPath());
					for (String line : lines) {
						line = line.trim();
						if (line.isEmpty() || line.startsWith("#")) {
							continue;
						}
						int eqIndex = line.indexOf('=');
						if (eqIndex > 0) {
							String key = line.substring(0, eqIndex).trim();
							String value = line.substring(eqIndex + 1).trim();
							if ((value.startsWith("\"") && value.endsWith("\"")) ||
							    (value.startsWith("'") && value.endsWith("'"))) {
								value = value.substring(1, value.length() - 1);
							}
							if (System.getProperty(key) == null && System.getenv(key) == null) {
								System.setProperty(key, value);
							}
						}
					}
					System.out.println("Loaded environment variables from " + file.getAbsolutePath());
					break;
				} catch (Exception e) {
					System.err.println("Could not load .env file: " + e.getMessage());
				}
			}
		}
	}

}
