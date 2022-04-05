package com.LoginSecurity.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.LoginSecurity.model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
	
	UserModel findByUsername(String username);

}
