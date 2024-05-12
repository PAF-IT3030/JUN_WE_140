package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.entity.Meal;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.service.MealService;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin
public class MealController {

    @Autowired
     MealService mealService;

    @Autowired
    UserService userService;

    @PostMapping("/")
    public ResponseEntity<Meal> createMeal(@RequestBody Meal meal) {
        Meal newMeal = mealService.createNewMeal(meal);
        return new ResponseEntity<>(newMeal, HttpStatus.CREATED);
    }

    @DeleteMapping("/{mealId}")
    public ResponseEntity<String> deleteMeal(@PathVariable Integer mealId) {
        mealService.deleteMeal(mealId);
        return ResponseEntity.ok("Meal deleted successfully");
    }

    @GetMapping("/{mealId}")
    public ResponseEntity<Meal> findMealById(@PathVariable Integer mealId) {
        Meal meal = mealService.findMealById(mealId);
        return new ResponseEntity<>(meal, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Meal>> findAllMeals() {
        List<Meal> meals = mealService.findAllMeals();
        return new ResponseEntity<>(meals, HttpStatus.OK);
    }


    @PutMapping("/{mealId}")
    public ResponseEntity<String> updateMeal(@RequestHeader("Authorization") String jwt, @PathVariable Integer mealId ) {
        try {
            User reqUser = userService.findUserByJwt(jwt);
            Meal updatedMeal = mealService.findMealById(mealId);
            return ResponseEntity.ok("Meal updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update meal: " + e.getMessage());
        }
    }

}


