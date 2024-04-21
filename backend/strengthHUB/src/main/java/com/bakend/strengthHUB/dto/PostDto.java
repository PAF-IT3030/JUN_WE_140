package com.bakend.strengthHUB.dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class PostDto {
    @Id
    private int postId;
    private String userId;
    private String image;
    private String description;
    private String date;
}
