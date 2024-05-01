package com.bakend.strengthHUB.dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PostDTO {

//    private String userId;
    private  Long postId;
    private String userId;
    private String title;
    private String description;
    private String filePath;
    private Date createdAt;
}
