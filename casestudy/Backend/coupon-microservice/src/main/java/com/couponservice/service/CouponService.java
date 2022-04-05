package com.couponservice.service;

import java.util.List;
import java.util.Optional;

import com.couponservice.entity.Coupon;



public interface CouponService {

	Coupon save(Coupon deal);

	List<Coupon> findAll();

	String deleteById(String couponId);

	Optional<Coupon> findByCouponId(String couponId);




}
