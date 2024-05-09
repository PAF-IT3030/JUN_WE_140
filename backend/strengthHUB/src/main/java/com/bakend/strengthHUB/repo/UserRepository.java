package com.bakend.strengthHUB.repo;

import com.bakend.strengthHUB.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User,Integer> {

    User findByEmail(String email);
}
