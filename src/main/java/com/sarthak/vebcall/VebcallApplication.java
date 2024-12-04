package com.sarthak.vebcall;

import com.sarthak.vebcall.user.User;
import com.sarthak.vebcall.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VebcallApplication {

	public static void main(String[] args) {
		SpringApplication.run(VebcallApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserService service){
		return args -> {
			// service.register(User.builder().username("sarthak").email("sarthak@gmail.com").password("aaa").build());
			// service.register(User.builder().username("sarthak1").email("sarthak1@gmail.com").password("aaa").build());
			// service.register(User.builder().username("sarthak2").email("sarthak2@gmail.com").password("aaa").build());
		};
	}

}
