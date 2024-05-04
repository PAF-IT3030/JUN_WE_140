package com.bakend.strengthHUB.controller;

import com.bakend.strengthHUB.dto.CommentDTO;
import com.bakend.strengthHUB.entity.Comment;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.CommentService;
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

    @PostMapping("/")
    public ResponseEntity<Object> addComment(@RequestBody CommentDTO commentDTO) {
        Comment comment = commentService.addComment(commentDTO);
        if (comment != null) {
            return new ResponseEntity<>(comment, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to add comment", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<CommentDTO>> getAllComments() {
        List<CommentDTO> commentDTOs = commentService.getAllComments().stream()
                .map(comment -> new CommentDTO(comment.getUserId(), comment.getCommentId(), comment.getComment()))
                .collect(Collectors.toList());
        return new ResponseEntity<>(commentDTOs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCommentById(@PathVariable("id") Long id) {
        Comment comment = commentService.getCommentById(id);
        if (comment != null) {
            CommentDTO commentDTO = new CommentDTO(comment.getUserId(), comment.getCommentId(), comment.getComment());
            return new ResponseEntity<>(commentDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Comment not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateComment(@PathVariable("id") Long id, @RequestBody CommentDTO commentDTO) {
        Comment updatedComment = commentService.updateComment(id, commentDTO.getComment());
        if (updatedComment != null) {
            CommentDTO updatedCommentDTO = new CommentDTO(updatedComment.getUserId(), updatedComment.getCommentId(), updatedComment.getComment());
            return new ResponseEntity<>(updatedCommentDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Comment not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable("id") Long id) {
        if (commentService.deleteComment(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
