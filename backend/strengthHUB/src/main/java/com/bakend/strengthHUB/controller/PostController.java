package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.PostService;
import com.bakend.strengthHUB.dto.PostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping(value = "api/post")
@CrossOrigin

public class PostController {



    @Autowired
    private PostService postService;
    
    @PostMapping("/")
    public ResponseEntity<Post> createPost(@RequestParam("title") String title,
                                           @RequestParam("description") String description,
                                           @RequestParam("file") MultipartFile file) {

        System.out.println(title+description+file+"data");

        Post post = postService.createPost(title, description, file);
        if (post != null) {
            return new ResponseEntity<>(post, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<PostDTO>> getAllPosts() {
        List<PostDTO> posts = postService.getAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

}
