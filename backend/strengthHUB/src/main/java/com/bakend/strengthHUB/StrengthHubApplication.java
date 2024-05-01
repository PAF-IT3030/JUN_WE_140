package com.bakend.strengthHUB;

import jakarta.servlet.MultipartConfigElement;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.util.unit.DataSize;

@SpringBootApplication
public class StrengthHubApplication {

	public static void main(String[] args) {
		SpringApplication.run(StrengthHubApplication.class, args);
	}

	@Bean
	public MultipartConfigElement multipartConfigElement() {
		MultipartConfigFactory factory = new MultipartConfigFactory();
		factory.setMaxFileSize(DataSize.parse("10MB")); // Set maximum file size
		factory.setMaxRequestSize(DataSize.parse("10MB")); // Set maximum request size
		return factory.createMultipartConfig();
	}
}
