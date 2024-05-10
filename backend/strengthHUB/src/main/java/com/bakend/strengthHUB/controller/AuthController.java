package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.Config.JwtProvider;
import com.bakend.strengthHUB.Responses.AuthResponse;
import com.bakend.strengthHUB.dto.UserDTO;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.repo.UserRepository;
import com.bakend.strengthHUB.request.LoginRequest;
import com.bakend.strengthHUB.service.CustomUserDetailsService;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailsService customUserDetails;
    @PostMapping(value = "/signup")
    public AuthResponse createUser(@RequestBody User user) throws Exception {

        System.out.println(user + "user");

        User isExist = userRepository.findByEmail(user.getEmail());

        if(isExist!=null){
            throw new Exception("email already used with another account");
        }

        User newUser = new User();

        newUser.setFirstname(user.getFirstname());
        newUser.setLastname(user.getLastname());
        newUser.setEmail(user.getEmail());
        newUser.setAge(user.getAge());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = userRepository.save(newUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());

        String token = JwtProvider.generateToken(authentication);
        System.out.println(token+"Register Success!!!");

        return new AuthResponse(token,"Register Success!!!");
    }

    @PostMapping("/signin")
    public AuthResponse signin(@RequestBody LoginRequest loginRequest){
        
        Authentication authentication = authenticate(loginRequest.getEmail(),loginRequest.getPassword());

        String token = JwtProvider.generateToken(authentication);

        AuthResponse res = new AuthResponse(token,"Login Successful");
        return res;
    }

    private Authentication authenticate(String email,String password) {

        UserDetails userDetails = customUserDetails.loadUserByUsername(email);
        if (userDetails == null) {

            throw new BadCredentialsException("Invalid username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {

            throw new BadCredentialsException("Password not matched...!!!");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }

}
