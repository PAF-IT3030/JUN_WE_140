package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.CommentDTO;
import com.bakend.strengthHUB.entity.Comment;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.entity.User;
import com.bakend.strengthHUB.service.CommentService;
import com.bakend.strengthHUB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResponseErrorHandler;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/comments")
@CrossOrigin

public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    UserService userService;

    @PostMapping("/post/{postId}")
    public Comment createComment(@RequestBody Comment comment,
                                 @RequestHeader("Authorization") String jwt,
                                 @PathVariable("postId") Integer postId) throws Exception {

        User user = userService.findUserByJwt(jwt);

        Comment newComment = commentService.createComment(comment, postId, user.getId());

        return newComment;
    }


}
