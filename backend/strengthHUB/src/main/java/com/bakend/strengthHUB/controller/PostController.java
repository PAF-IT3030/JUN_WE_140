package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping(value = "api/post/")
@CrossOrigin

public class PostController {

    @Autowired
    private PostService postService;

//    @PostMapping("/post")
//    public String uploadImage(@RequestParam("file") MultipartFile file) throws  IOException {
//        return postService.uploadImage(file);
//    }
//
//    @PostMapping("/video")
//    public String uploadVideo(@RequestParam("file") MultipartFile file) throws IOException {
//        return postService.uploadVideo(file);
//    }

    @PostMapping("/")
    public Post createPost(@RequestBody PostDTO postDTO) {
        return postService.createPost(postDTO);
    }

    @GetMapping("/{postId}")
    public PostDTO getPostById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }


}
