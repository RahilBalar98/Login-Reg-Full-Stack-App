package com.rahilbalar98.bproject.bproject.controller;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rahilbalar98.bproject.bproject.repository.*;
import com.rahilbalar98.bproject.bproject.model.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserRepository UserRepository;

	@GetMapping("/Users")
	public ResponseEntity<List<User>> getAllUsers() {
		try {
			List<User> Users = new ArrayList<User>();
			
			UserRepository.findAll().forEach(Users::add);

			if (Users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(Users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/Users")
	public String createUser(@RequestBody User user) {
		try {
			System.out.println(user);
			if((!user.getFirstname().isEmpty()) && (!user.getLastname().isEmpty()) && (!user.getEmail().isEmpty()) && (!user.getPassword().isEmpty()) && (!user.getAddress().isEmpty()))
			{
				UserRepository.save(new User(user.getFirstname(),user.getLastname(), user.getEmail(), user.getPassword(), user.getAddress()));
				return "Added";
			}
			return "All fields should be not null";
			
		} catch (Exception e) {
			return "Error";
		}
	}

	@PostMapping("/find/{email}")
	public String updateUser(@PathVariable("email") String email,@RequestBody User user) {
		
		Optional<User> UserData = UserRepository.findByEmail(email);
		System.out.println(UserData);
		if (UserData.isPresent()) {
			User _user = UserData.get();
			if(user.getFirstname()!=null)
				_user.setFirstname(user.getFirstname());
			if(user.getLastname()!=null)
				_user.setLastname(user.getLastname());
			if(user.getPassword()!=null)
				_user.setPassword(user.getPassword());
			if(user.getEmail()!=null)
				_user.setEmail(user.getEmail());
			if(user.getAddress()!=null)
				_user.setAddress(user.getAddress());
			UserRepository.save(_user);
			return "Updated";
			
		} else {
			return "Error";
		}
	}
	
	@PostMapping("/verify")
	public String verifyUser(@RequestBody User user){
		Optional<User> UserData = UserRepository.findByEmail(user.getEmail());
		System.out.println(UserData);
		
		if(UserData.isPresent())
		{
			User _user = UserData.get();
			
			if(user.getPassword().equals(_user.getPassword()))
			{
				return "Successful";
			}
			else
			{
				return "Invalid Credentials";
			}
		}
		else
		{
			return "Email is not registered :)";
		}
		
	}
	@Transactional
	@PostMapping("/delete/{email}")
	public String deleteuser(@PathVariable("email") String email) {
		try {
			Optional<User> _user = UserRepository.deleteByEmail(email);
			System.out.println(_user);
			return "Deleted";
		} catch (Exception e) {
			System.out.println(e);
			return "Error";
		}
	}

	@GetMapping("/delete/users")
	public String deleteAllusers() {
		try {
			UserRepository.deleteAll();
			return "Deleted";
		} catch (Exception e) {
			return "Error";
		}

	  }
}
