package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.entity.Comment;

public interface CommentService {

    public Comment createComment(Comment comment,
                                 Integer postId,
                                 Integer userId) throws Exception;
    public Comment editComment(Comment comment,Integer postId,Integer userId);

    public Comment findCommentById(Integer commentId) throws Exception;


}
