package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface PostService {
    Post createNewPost(Post post,Integer userId)throws Exception;

    String deletePost(Integer postId,Integer userId) throws Exception;

    Post findPostById(Integer postId) throws Exception;
    List<Post> findAllPosts();

    List<Post> findPostByUserId(Integer userId);

    Post likePost(Integer postId,Integer userId)throws Exception;
    Post updatePostByUserId(Integer postId, Integer userId, PostDTO postDTO) throws Exception;
}
