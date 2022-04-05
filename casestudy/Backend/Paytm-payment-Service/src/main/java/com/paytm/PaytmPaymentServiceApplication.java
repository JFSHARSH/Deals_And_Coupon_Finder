package com.paytm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
@RequestMapping("/verify")

public class PaytmPaymentServiceApplication {
	
	@GetMapping("/get")
	public String sendcoupon()
	{
		return "Payment service is called";
	}

	public static void main(String[] args) {
		SpringApplication.run(PaytmPaymentServiceApplication.class, args);
	}

}
