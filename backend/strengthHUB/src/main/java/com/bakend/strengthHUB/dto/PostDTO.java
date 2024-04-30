package com.bakend.strengthHUB.dto;

import jakarta.persistence.Id;

import java.io.File;
import java.util.Date;

public class PostDTO {
    @Id
    private Long postId;
    private Long userId;
    private Date postedDate;
    private String description;
    private Long fileName;
}
