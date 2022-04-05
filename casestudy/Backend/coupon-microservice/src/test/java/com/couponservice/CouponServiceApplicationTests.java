package com.couponservice;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.couponservice.entity.Coupon;
import com.couponservice.repository.CouponRepository;
import com.couponservice.service.CouponService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CouponServiceApplicationTests {
	
	
	@Autowired
	CouponService service;
	
	@MockBean
	CouponRepository repository;
	
	 @Test
	  public void findAllTest()
	  {
	  when(repository.findAll()).thenReturn(Stream.of
	    (new Coupon("12","PHONE10",3,2,4,"swiggy20","https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"),new Coupon("14","PHONE10",3,2,4,"swiggy20","https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"),new Coupon("13","PHONE10",3,4,4,"swiggy20","https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"),new Coupon("17","PHONE10",3,4,4,"swiggy20","https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"))
	    .collect(Collectors.toList()));
	  assertEquals(4,service.findAll().size());
	  }
	 @Test
	 public void saveTest() 
	 {
	  Coupon coupon =  new Coupon("16","PHONE10",3,4,4,"swiggy20","https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg");
        when(repository.save(coupon)).thenReturn(coupon);
	   assertEquals(coupon,service.save(coupon));
		
	 }
	

	
}
