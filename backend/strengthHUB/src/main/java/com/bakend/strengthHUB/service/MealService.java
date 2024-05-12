package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.entity.Meal;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

public interface MealService {
    Meal createNewMeal(Meal meal);

    void deleteMeal(Integer mealId);

    Meal findMealById(Integer mealId);

    List<Meal> findAllMeals();

    Meal updateMealById(Integer userId, int mealId);

}



/*package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.entity.Meal;

import java.util.List;

public interface MealService {
    Meal createNewMeal(Meal meal);

    void deleteMeal(Integer mealId);

    Meal findMealById(Integer mealId);

    List<Meal> findAllMeals();

    Meal updateMeal(Meal meal);
}*/

