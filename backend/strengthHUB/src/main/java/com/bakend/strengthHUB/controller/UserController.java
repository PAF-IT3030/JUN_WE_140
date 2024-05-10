package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.UserDTO;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) throws Exception {
        return userService.getUserById(id);
    }
    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/")
    public User updateUser(@RequestHeader("Authorization")String jwt,@RequestBody User user) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        User updatedUser = userService.updateUser(reqUser.getId(), user);
        return updatedUser;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }

    @PutMapping("/follow/{userId2}")
    public User followUserHandler(@RequestHeader("Authorization")String jwt,@PathVariable Integer userId2) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        User user = userService.followUser(reqUser.getId(),userId2);
        return user;
    }
    @GetMapping("/profile")
    public User getUserByToken(@RequestHeader("Authorization")String jwt){

        User user = userService.findUserByJwt(jwt);
        user.setPassword(null);
        return user;
    }

}
