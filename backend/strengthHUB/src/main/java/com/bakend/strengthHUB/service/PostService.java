package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.entity.Post;
import org.springframework.web.multipart.MultipartFile;



public interface PostService {
    Post createPost(String title, String description, MultipartFile file);
}
