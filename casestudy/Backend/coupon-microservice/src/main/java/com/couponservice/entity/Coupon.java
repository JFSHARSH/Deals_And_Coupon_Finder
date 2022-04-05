package com.couponservice.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Coupon")
public class Coupon {
	@Id
	private String id;
	@Field
	private String title;
	@Field
	private int price;	
	@Field
	private int rating;
	@Field
	private int discount;
	@Field
	private String couponcode;
	@Field
	private String image;

	
	
	
  



	public String getId() {
		return id;
	}








	public void setId(String id) {
		this.id = id;
	}








	public String getTitle() {
		return title;
	}








	public void setTitle(String title) {
		this.title = title;
	}








	public int getPrice() {
		return price;
	}








	public void setPrice(int price) {
		this.price = price;
	}








	















	public int getRating() {
		return rating;
	}








	public void setRating(int rating) {
		this.rating = rating;
	}








	public int getDiscount() {
		return discount;
	}








	public void setDiscount(int discount) {
		this.discount = discount;
	}








	public String getCouponcode() {
		return couponcode;
	}








	public void setCouponcode(String couponcode) {
		this.couponcode = couponcode;
	}








	public String getImage() {
		return image;
	}








	public void setImage(String image) {
		this.image = image;
	}
	
	
public Coupon(String id, String title, int price,int rating, int discount, String couponcode,
			String image) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.rating = rating;
		this.discount = discount;
		this.couponcode = couponcode;
		this.image = image;
	}

    @Override
	public String toString() {
		return "Coupon [title=" + title+ ", price=" + price +", rating=" + rating
				+ ", discount=" + discount + "couponcode "+couponcode+"]";
	}
	
}
