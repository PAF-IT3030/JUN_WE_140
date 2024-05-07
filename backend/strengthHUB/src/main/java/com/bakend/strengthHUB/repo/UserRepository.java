package com.bakend.strengthHUB.repo;

import com.bakend.strengthHUB.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
