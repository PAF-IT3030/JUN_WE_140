package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.entity.Meal;
import com.bakend.strengthHUB.service.MealService;
import com.bakend.strengthHUB.repo.MealRepository; // Assuming you have a MealRepository interface

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealServiceImpl implements MealService {

    @Autowired
    private MealRepository mealRepository;

    @Override
    public Meal createNewMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    @Override
    public void deleteMeal(Integer mealId) {
        mealRepository.deleteById(mealId);
    }

    @Override
    public Meal findMealById(Integer mealId) {
        Optional<Meal> optionalMeal = mealRepository.findById(mealId);
        return optionalMeal.orElse(null);
    }

    @Override
    public List<Meal> findAllMeals() {
        return mealRepository.findAll();
    }

    @Override
    public Meal updateMealById(Integer userId, int mealId) {
        // Implement update logic if needed
        return null;
    }
}
