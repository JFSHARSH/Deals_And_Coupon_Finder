package com.couponservice.resource;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.couponservice.entity.Coupon;
import com.couponservice.service.CouponService;



@CrossOrigin
@RestController
@RequestMapping("/coupon")
public class CouponController {
	
	
	Logger logger= LoggerFactory.getLogger(CouponController.class);
	
	private final CouponService couponService;
	
	@Autowired
	public CouponController(CouponService couponService) {
		this.couponService=couponService;
	}
	//to get all the coupon
	@GetMapping("/findall")
	public List<Coupon> findAll() {
		logger.error("error");
		logger.info("Informaation");
		logger.warn("Warning");
		return (List<Coupon>) couponService.findAll();
		
		}
	
	

	
	//to add a coupon
	@PostMapping("/add")
	public Coupon addCoupon(@RequestBody Coupon deal) {
		Coupon coupon = couponService.save(deal);
		return coupon;
	}

	
	
	
	
	

	//delete by coupon id
	@DeleteMapping("/delete/id/{couponId}")
	public String deleteCouponBycouponId(@PathVariable("couponId") String couponId) {
		String result = couponService.deleteById(couponId);
		return result;
	}
	
	
	
	

	

	
	//to update by id
	@PutMapping("/update/id/{id}")
	public Coupon updateCoupon(@RequestBody Coupon deal) {
		Coupon coupon = couponService.save(deal);
		return coupon;
	}
}
