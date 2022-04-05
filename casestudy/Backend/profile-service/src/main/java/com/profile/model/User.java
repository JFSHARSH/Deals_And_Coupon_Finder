package com.profile.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="user")
public class User {

	  @Id
	    private String id;
	//  @Field
	    private String userName;
	    private String password;
	    private String mobileNumber;
	    private String gender;
	    
	  
		
		public String getId() {
			return id;
		}



		public void setId(String id) {
			this.id = id;
		}



		public String getUserName() {
			return userName;
		}



		public void setUserName(String userName) {
			this.userName = userName;
		}



		public String getPassword() {
			return password;
		}



		public void setPassword(String password) {
			this.password = password;
		}



		public String getMobileNumber() {
			return mobileNumber;
		}



		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}



		public String getGender() {
			return gender;
		}



		public void setGender(String gender) {
			this.gender = gender;
		}



		public User( String userName,String password, String mobileNumber, String gender) {
			super();
			
			this.userName = userName;
			this.password = password;
			this.mobileNumber = mobileNumber;
			this.gender = gender;
		}



		@Override
		public String toString() {
			return "Profile  [ UserName=" + userName +"password ="+password+" mobile number = "+mobileNumber + " gender ="+gender+"]";
		}
	    
}
