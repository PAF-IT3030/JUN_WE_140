package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.UserDTO;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/")
    public User createUser(@RequestBody UserDTO userDTO) {
        return userService.createUser(userDTO);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) throws Exception {
        return userService.getUserById(id);
    }
    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        return userService.updateUser(id, userDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }

    @PutMapping("/follow/{userId1}/{userId2}")
    public User followUserHandler(@PathVariable Integer userId1,@PathVariable Integer userId2) throws Exception {
        User user = userService.followUser(userId1,userId2);
        return user;
    }
}
