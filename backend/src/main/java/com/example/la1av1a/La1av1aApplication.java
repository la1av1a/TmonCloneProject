package com.example.la1av1a;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan
public class La1av1aApplication {

	public static void main(String[] args) {
		SpringApplication.run(La1av1aApplication.class, args);
	}

}
