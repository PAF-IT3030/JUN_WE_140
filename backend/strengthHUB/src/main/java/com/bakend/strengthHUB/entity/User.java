package com.bakend.strengthHUB.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstname;
    private String lastname;
    private Integer age;
    private String email;
    private String password;
    @ElementCollection
    private List<Integer> followers;

    @ElementCollection
    private List<Integer> followings;


}
