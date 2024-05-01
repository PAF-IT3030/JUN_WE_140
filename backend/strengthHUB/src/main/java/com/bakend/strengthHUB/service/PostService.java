package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface PostService {
    Post createPost(String title, String description, MultipartFile file);
    List<PostDTO> getAllPosts();
}
