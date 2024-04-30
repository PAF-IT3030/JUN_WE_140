package com.bakend.strengthHUB.service.PostService;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface PostService {
    String uploadImage(MultipartFile file) throws IOException;
    String uploadVideo(MultipartFile file) throws IOException;
    Post createPost(PostDTO postDTO);
    PostDTO getPostById(Long postId);
}
