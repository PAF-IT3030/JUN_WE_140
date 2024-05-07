package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.dto.UserDTO;
import com.bakend.strengthHUB.entity.User;

import java.util.List;

public interface UserService {
    User createUser(UserDTO user);
    User getUserById(Integer id);

    List<User> getAllUsers();

    User updateUser(Integer id, UserDTO userDTO);

    String deleteUser(Integer id);
}
