package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.entity.Update;
import com.bakend.strengthHUB.service.UpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/updates")
@CrossOrigin
public class UpdateController {

    @Autowired
    UpdateService updateService;

    @PostMapping("/")
    public ResponseEntity<Update> createUpdate(@RequestBody Update update) {
        Update newUpdate = updateService.createNewUpdate(update);
        return new ResponseEntity<>(newUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{updateId}")
    public ResponseEntity<String> deleteUpdate(@PathVariable Integer updateId) {
        updateService.deleteUpdate(updateId);
        return ResponseEntity.ok("Update deleted successfully");
    }

    @GetMapping("/{updateId}")
    public ResponseEntity<Update> findUpdateById(@PathVariable Integer updateId) {
        Update update = updateService.findUpdateById(updateId);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Update>> findAllUpdates() {
        List<Update> updates = updateService.findAllUpdates();
        return new ResponseEntity<>(updates, HttpStatus.OK);
    }

    @PutMapping("/{updateId}")
    public ResponseEntity<String> updateUpdate(@RequestHeader("Authorization") String jwt, @PathVariable Integer updateId ) {
        try {
            // Implement update logic here
            Update reqUpdate = updateService.findUpdateById(updateId);
            Update updatedUpdate = updateService.findUpdateById(updateId);
            return ResponseEntity.ok("Update updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update update: " + e.getMessage());
        }
    }
}

