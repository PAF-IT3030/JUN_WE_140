package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.Config.JwtProvider;
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
    public User createUser(User user) {
        User newUser = new User();
        newUser.setFirstname(user.getFirstname());
        newUser.setLastname(user.getLastname());
        newUser.setEmail(user.getEmail());
        newUser.setAge(user.getAge());
        newUser.setPassword(user.getPassword());
        newUser.setFollowers(user.getFollowers());
        newUser.setFollowings(user.getFollowings());

        User savedUser = userRepository.save(user);
        return savedUser;
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
    public User updateUser( Integer id,User user) throws Exception {

        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isEmpty()){
            throw new Exception("user not exit with id"+id);
        }

        User oldUser = optionalUser.get();

        if(user.getFirstname()!=null){
            oldUser.setFirstname(user.getFirstname());
        }
        if(user.getLastname()!=null){
            oldUser.setLastname(user.getLastname());
        }
        if(user.getAge()!=null){
            oldUser.setAge(user.getAge());
        }
        if(user.getEmail()!=null){
            oldUser.setEmail(user.getEmail());
        }

        User updatedUser = userRepository.save(oldUser);

        return updatedUser;
    }

    @Override
    public User findUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return user;
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

    public User followUser(Integer reqUserId,Integer userId2) throws Exception {
        User reqUser = getUserById(reqUserId);
        User user2 = getUserById(userId2);

        user2.getFollowers().add(reqUser.getId());
        reqUser.getFollowings().add(user2.getId());

        userRepository.save(reqUser);
        userRepository.save(user2);

        return reqUser;

    }

    @Override
    public User findUserByJwt(String jwt) {
        String email = JwtProvider.getEmailFromJwtToken(jwt);

        User user = userRepository.findByEmail(email);

        return user;
    }
}
