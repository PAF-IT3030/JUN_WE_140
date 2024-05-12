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
public class Update {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String exercise;
    private int sets;
    private int reps;
    private double weight;
    private String note;
    private String image;
    private String video;

    private LocalDate createdAt;

    // Constructors, getters, setters, toString, hashCode/equals
}

