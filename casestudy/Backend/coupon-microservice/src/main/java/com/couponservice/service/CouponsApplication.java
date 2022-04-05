package com.couponservice.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;




@EnableEurekaClient
@SpringBootApplication
public class CouponsApplication {
	
	public static void main(String[] args ) {
		SpringApplication.run(CouponsApplication.class, args);
	}
	
	@Bean
	@LoadBalanced
	public RestTemplate getrestTemplate()
	{
		return new RestTemplate();
	}

}
