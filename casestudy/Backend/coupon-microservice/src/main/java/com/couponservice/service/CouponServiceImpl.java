package com.couponservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.couponservice.entity.Coupon;
import com.couponservice.exception.ApiRequestException;
import com.couponservice.repository.CouponRepository;

@Service
public class CouponServiceImpl implements CouponService {
	@Autowired
	CouponRepository couponRepository;

	public Coupon save(Coupon deal) {
		Coupon coupon = couponRepository.save(deal);
		return coupon;
	}

	public List<Coupon> findAll() {
		return (List<Coupon>) couponRepository.findAll();
	}
	
	public Optional<Coupon> findByCouponId(String couponId) {
		
		 return Optional.of(couponRepository.findById(couponId).orElseThrow( () -> new ApiRequestException("id not found ::")));
	}

	
	public String deleteById(String id) {
		if (!findByCouponId(id).isEmpty()) {
			couponRepository.deleteById(id);
			return "Id " + id + " deleted!";
		} else {
			return "Id " + id + " is not found";
		}
	}


	


}
