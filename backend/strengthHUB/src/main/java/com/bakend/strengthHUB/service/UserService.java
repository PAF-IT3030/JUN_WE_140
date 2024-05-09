package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.entity.User;

import java.util.List;

public interface UserService {
    User createUser(User user);
    public User getUserById(Integer id) throws Exception;

    public List<User> getAllUsers();

    public User updateUser( Integer id,User user) throws Exception;

    public User findUserByEmail(String email);
    public String deleteUser(Integer id);
    public User followUser(Integer userId1,Integer userId2) throws Exception;

    public User findUserByJwt(String jwt);


}
