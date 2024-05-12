package com.bakend.strengthHUB.repo;

import com.bakend.strengthHUB.entity.Update;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UpdateRepository extends JpaRepository<Update, Integer> {

}

