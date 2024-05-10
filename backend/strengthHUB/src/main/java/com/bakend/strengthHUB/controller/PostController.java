package com.bakend.strengthHUB.controller;


import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.service.PostService;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/posts")
@CrossOrigin
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    UserService userService;

    @PostMapping("/")
    public ResponseEntity<Post> createPost(@RequestHeader("Authorization") String jwt, @RequestBody Post post) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);

        Post newPost = postService.createNewPost(post, reqUser.getId());
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);

    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deletePost(@RequestHeader("Authorization")String jwt,@PathVariable Integer postId) throws Exception {
        try {
            User reqUser = userService.findUserByJwt(jwt);
            postService.deletePost(postId, reqUser.getId());
            return ResponseEntity.ok("Post deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete post: " + e.getMessage());
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Post> findPostById(@PathVariable Integer postId) throws Exception {

        Post post = postService.findPostById(postId);

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Post>> findAllPosts() {
        List<Post> posts = postService.findAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


    @GetMapping("/user")
    public ResponseEntity<List<Post>> findUsersPost(@RequestHeader("Authorization")String jwt) {

        User reqUser = userService.findUserByJwt(jwt);
        List<Post> posts = postService.findPostByUserId(reqUser.getId());
        return new ResponseEntity<List<Post>>(posts, HttpStatus.ACCEPTED);
    }

    @PutMapping("/like/{postId}")
    public ResponseEntity<Post> findPostById(@RequestHeader("Authorization")String jwt,@PathVariable Integer postId) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        Post post = postService.likePost(postId, reqUser.getId());

        return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
    }

    @PutMapping("/{postId}")
    public ResponseEntity<String> updatePost(@RequestHeader("Authorization")String jwt,@PathVariable Integer postId, @RequestBody PostDTO updatedPostDTO) {
        try {

            User reqUser = userService.findUserByJwt(jwt);

            Post updatedPost = postService.updatePostByUserId(postId, reqUser.getId(), updatedPostDTO);

            // Return a success message
            return ResponseEntity.ok("Post updated successfully");
        } catch (Exception e) {
            // Return an error message if an exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update post: " + e.getMessage());
        }
    }

}
