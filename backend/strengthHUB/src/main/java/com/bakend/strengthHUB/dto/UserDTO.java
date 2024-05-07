package com.bakend.strengthHUB.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String firstname;
    private String lastname;
    private Integer age;
    private String email;
    private String password;
    private List<Integer> followers;
    private List<Integer> followings;

}
