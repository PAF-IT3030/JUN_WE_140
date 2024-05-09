package com.bakend.strengthHUB.controller;


import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.PostService;
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

    @PostMapping("/user/{userId}")
    public ResponseEntity<Post> createPost(@RequestBody Post post,@PathVariable Integer userId)throws Exception {

            Post newPost = postService.createNewPost(post,userId);
            return new ResponseEntity<>(newPost, HttpStatus.CREATED);

    }

    @DeleteMapping("/{postId}/{userId}")
    public ResponseEntity<String> deletePost(@PathVariable Integer postId, @PathVariable Integer userId) throws Exception {
        try {
            postService.deletePost(postId, userId);
            return ResponseEntity.ok("Post deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete post: " + e.getMessage());
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Post> findPostById(@PathVariable Integer postId) throws Exception{

        Post post = postService.findPostById(postId);

        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
    }
    @GetMapping("/")
    public ResponseEntity<List<Post>> findAllPosts() {
        List<Post> posts = postService.findAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Post>> findUsersPost(@PathVariable Integer userId){

        List<Post> posts = postService.findPostByUserId(userId);
        return new ResponseEntity<List<Post>>(posts,HttpStatus.ACCEPTED);
    }

    @PutMapping("/like/{postId}/user/{userId}")
    public ResponseEntity<Post> findPostById(@PathVariable Integer postId,@PathVariable Integer userId) throws Exception{

        Post post = postService.likePost(postId,userId);

        return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
    }
    @PutMapping("/{postId}/{userId}")
    public ResponseEntity<String> updatePost(@PathVariable Integer postId, @PathVariable Integer userId, @RequestBody PostDTO updatedPostDTO) {
        try {
            // Call the service layer method to update the post
            Post updatedPost = postService.updatePostByUserId(postId, userId, updatedPostDTO);

            // Return a success message
            return ResponseEntity.ok("Post updated successfully");
        } catch (Exception e) {
            // Return an error message if an exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update post: " + e.getMessage());
        }
    }

}
