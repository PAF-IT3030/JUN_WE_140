package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.PostDto;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


}
