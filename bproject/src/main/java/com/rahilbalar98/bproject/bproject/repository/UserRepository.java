package com.rahilbalar98.bproject.bproject.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.jdbc.core.JdbcTemplate;

import com.rahilbalar98.bproject.bproject.model.*;

public interface UserRepository extends JpaRepository<User, Integer> {

	 Optional<User> findByEmail(String email);
//	 @Modifying
//	 @Query("delete from User u where u.email = email")
	 Optional<User> deleteByEmail(String email);
}
