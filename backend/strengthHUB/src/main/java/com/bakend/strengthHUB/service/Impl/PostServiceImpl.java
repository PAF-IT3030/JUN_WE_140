package com.bakend.strengthHUB.service.Impl;


import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.repo.PostRepository;
import com.bakend.strengthHUB.repo.UserRepository;
import com.bakend.strengthHUB.service.PostService;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;
    @Override
    public Post createNewPost(Post post, Integer userId) throws Exception {

        User user = userService.getUserById(userId);
        if (user == null) {
            throw new Exception("User not found"); // Handle user not found scenario
        }

        Post newPost = new Post();
        newPost.setTitle(post.getTitle());
        newPost.setDescription(post.getDescription());
        newPost.setImage(post.getImage());
        newPost.setVideo(post.getVideo());
        newPost.setCreatedAt(post.getCreatedAt());
        newPost.setUser(user);

        return postRepository.save(newPost);
    }

    @Override
    public String deletePost(Integer postId, Integer userId) throws Exception {
        // Find the post by postId
        Post post = findPostById(postId);

        // Check if the post exists
        if (post == null) {
            throw new Exception("Post not found");
        }

        // Find the user by userId
        User user = userService.getUserById(userId);

        // Check if the user exists
        if (user == null) {
            throw new Exception("User not found");
        }

        // Check if the user is the owner of the post
        if (!post.getUser().getId().equals(userId)) {
            throw new Exception("You can't delete another user's post");
        }else {
            // Delete the post
            postRepository.delete(post);

            return "Post deleted successfully";
        }

    }


    @Override
    public Post findPostById(Integer postId) throws Exception {
        Optional<Post> opt = postRepository.findById(postId);

        if(opt.isEmpty()){
            throw new Exception("post not FOUND!!"+postId);
        }
        return opt.get();
    }

    @Override
    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public List<Post> findPostByUserId(Integer userId) {

        return postRepository.findPostByUserId(userId);
    }


    @Override
    public Post likePost(Integer postId,Integer userId) throws Exception {
        Post post = findPostById(postId);
        User user = userService.getUserById(userId);

        if(post.getLiked().contains(user)){
            post.getLiked().remove(user);
        }else {
            post.getLiked().add(user);
        }

        return postRepository.save(post);
    }

    @Override
    public Post updatePostByUserId(Integer postId, Integer userId, PostDTO postDTO) throws Exception {
        // Find the post by postId
        Post post = findPostById(postId);

        // Check if the post exists
        if (post == null) {
            throw new Exception("Post not found");
        }

        // Find the user by userId
        User user = userService.getUserById(userId);

        // Check if the user exists
        if (user == null) {
            throw new Exception("User not found");
        }

        // Check if the user is the owner of the post
        if (!post.getUser().getId().equals(userId)) {
            throw new Exception("You can't update another user's post");
        }

        // Update the post parameters with the values from the DTO
        post.setTitle(postDTO.getTitle());
        post.setDescription(postDTO.getDescription());
        post.setImage(postDTO.getImage());
        post.setVideo(postDTO.getVideo());
        // Update any other parameters as needed

        // Save and return the updated post
        return postRepository.save(post);
    }


}
