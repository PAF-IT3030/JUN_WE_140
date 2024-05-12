package com.bakend.strengthHUB.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    @ManyToOne
    private User user;
    private int calories;
    private String plan;
    private String image;
    private String video;

    private LocalDate createdAt;

    // Constructors, getters, setters, toString, hashCode/equals
}

