package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.entity.Comment;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.repo.CommentRepository;
import com.bakend.strengthHUB.repo.PostRepository;
import com.bakend.strengthHUB.service.CommentService;
import com.bakend.strengthHUB.service.PostService;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

import static java.time.LocalDateTime.*;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;
    @Override
    public Comment createComment(Comment comment, Integer postId, Integer userId) throws Exception {

        User user = userService.getUserById(userId);

        Post post = postService.findPostById(postId);


        comment.setUser(user);
        comment.setComment(comment.getComment());
        comment.setCreatedAt(comment.getCreatedAt());

        Comment savedComment = commentRepository.save(comment);

        post.getComments().add(savedComment);

        postRepository.save(post);
        return savedComment;
    }

    @Override
    public Comment editComment(Comment comment, Integer postId, Integer userId) {
        return null;
    }

    @Override
    public Comment findCommentById(Integer commentId) throws Exception{
        Optional<Comment> opt = commentRepository.findById(commentId);

        if(opt.isEmpty()){
            throw new Exception("comment does not exist");
        }
        return opt.get();
    }
}
