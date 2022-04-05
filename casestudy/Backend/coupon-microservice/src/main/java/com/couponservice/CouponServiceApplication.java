package com.couponservice;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;

@SpringBootApplication
@RestController
@OpenAPIDefinition
@RequestMapping("/test")
public class CouponServiceApplication {
	
	@GetMapping("/get")
	public String sendcoupon()
	{
		return "Coupon service is called";
	}
	

	public static void main(String[] args) {
		SpringApplication.run(CouponServiceApplication.class, args);
	}
	
}
