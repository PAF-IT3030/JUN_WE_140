package com.bakend.strengthHUB.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
//    private String userId;
    private String title;
    private String description;
    private String image;
    private String video;

    @ManyToOne
    private User user;

    @Temporal(TemporalType.TIMESTAMP) // Specify TemporalType.TIMESTAMP
    @Column(name = "created_at", updatable = false) // Set updatable to false
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToMany
    private List<User> liked;

    @OneToMany
    private List<Comment> comments;

}
