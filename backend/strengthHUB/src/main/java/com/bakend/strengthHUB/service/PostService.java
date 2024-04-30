package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface PostService {
    Post createPost(PostDTO postDTO);
    PostDTO getPostById(Long postId);
}
