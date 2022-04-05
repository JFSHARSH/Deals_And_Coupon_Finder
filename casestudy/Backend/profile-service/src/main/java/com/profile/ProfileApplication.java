package com.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@SpringBootApplication
@RestController
@EnableHystrix
//@OpenAPIDefinition
public class ProfileApplication {
	
	@Autowired
	private RestTemplate template;

	@HystrixCommand(groupKey="Harsh",commandKey="Harsh",fallbackMethod="adminfallback")
	@GetMapping("/admin")
	public String admin()
	{
	String couponmicroserviceResponse=template.getForObject("http://localhost:8083/test/get", String.class);	
	String PaytmpaymentserviceResponse=template.getForObject("http://localhost:8084/verify/get", String.class);
	return couponmicroserviceResponse + "\n" + PaytmpaymentserviceResponse;
	}
	@GetMapping("/adminnot")
	public String adminnot()
	{
	String couponmicroserviceResponse=template.getForObject("http://localhost:8083/test/get", String.class);	
	String PaytmpaymentserviceResponse=template.getForObject("http://localhost:8084/verify/get", String.class);
	return couponmicroserviceResponse + "\n" + PaytmpaymentserviceResponse;
	}
	public static void main(String[] args) {
		SpringApplication.run(ProfileApplication.class, args);
	}
	
	@Bean
	public PasswordEncoder encoder() {
	    return new BCryptPasswordEncoder();
	}
	
	public String adminfallback() {
		return "Service gateway fail";
	}
	@Bean
	public RestTemplate template() {
		return new RestTemplate();
	}
	
	

}