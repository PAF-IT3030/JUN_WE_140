package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.PostDto;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "api/post/")
@CrossOrigin

public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }
    @PostMapping("/")
    public PostDto createPost(@RequestBody PostDto postDto) {
        return postService.createPost(postDto);
    }

    @GetMapping("/{id}")
    public Optional<Post> getPostById(@PathVariable Integer id) {
        if (postService.getPostById(id).isPresent()) {
            return postService.getPostById(id);
        }else {
            return Optional.empty();
        }

    }


}
