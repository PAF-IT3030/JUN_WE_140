package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.dto.PostDto;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.repo.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional

public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public PostDto createPost(PostDto postDto) {
        Post post = new Post();

        post.setUserId(postDto.getUserId());
        post.setDescription(postDto.getDescription());
        post.setDate(postDto.getDate());
        post.setImage(postDto.getImage());

        postRepository.save(post);
        return postDto;
    }

    public Optional<Post> getPostById(Integer id) {
        return postRepository.findById(id);
    }
}

