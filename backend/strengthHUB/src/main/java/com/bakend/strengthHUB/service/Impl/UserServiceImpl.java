package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.dto.UserDTO;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.repo.UserRepository;
import com.bakend.strengthHUB.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Override
    public User createUser(UserDTO userDTO) {
        User user = new User();
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setEmail(userDTO.getEmail());
        user.setAge(userDTO.getAge());
        user.setPassword(userDTO.getPassword());
        user.setFollowers(userDTO.getFollowers());
        user.setFollowings(userDTO.getFollowings());

        return userRepository.save(user);
    }

    @Override
    public User getUserById(Integer id) throws Exception {

        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()){
            return user.get();
        }

        throw new Exception("User not exist with userid "+id);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(Integer id, UserDTO userDTO) {

        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setFirstname(userDTO.getFirstname());
            user.setLastname(userDTO.getLastname());
            user.setAge(userDTO.getAge());
            user.setEmail(userDTO.getEmail());
            user.setPassword(userDTO.getPassword());
            user.setFollowers(userDTO.getFollowers());
            user.setFollowings(userDTO.getFollowings());
            return userRepository.save(user);
        }
        return null;
    }

    @Override
    public String deleteUser(Integer id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            userRepository.deleteById(id);
            return "User deleted successfully";
        } else {
            return "User not found";
        }
    }

    public User followUser(Integer userId1,Integer userId2) throws Exception {
        User user1 = getUserById(userId1);
        User user2 = getUserById(userId2);

        user2.getFollowers().add(user1.getId());
        user1.getFollowings().add(user2.getId());

        userRepository.save(user1);
        userRepository.save(user2);

        return user1;

    }
}
