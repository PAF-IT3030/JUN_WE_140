package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.dto.CommentDTO;
import com.bakend.strengthHUB.entity.Comment;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.repo.CommentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public Comment addComment(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setUserId(commentDTO.getUserId());
        comment.setComment(commentDTO.getComment());

        return commentRepository.save(comment);
    }

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public Comment getCommentById(Long id) {
        return commentRepository.findById(id).orElse(null);
    }

    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment updateComment(Long id, String newComment) {
        Comment existingComment = commentRepository.findById(id).orElse(null);
        if (existingComment != null) {
            existingComment.setComment(newComment);
            return commentRepository.save(existingComment);
        }
        return null;
    }

    public boolean deleteComment(Long id) {
        Comment comment = commentRepository.findById(id).orElse(null);
        if (comment != null) {
            commentRepository.delete(comment);
            return true;
        }
        return false;
    }
}
