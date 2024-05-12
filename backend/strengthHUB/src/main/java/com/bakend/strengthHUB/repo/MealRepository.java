package com.bakend.strengthHUB.repo;

import com.bakend.strengthHUB.entity.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal, Integer> {

}
