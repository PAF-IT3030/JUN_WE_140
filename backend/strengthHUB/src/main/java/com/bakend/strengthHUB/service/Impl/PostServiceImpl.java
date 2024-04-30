package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.service.PostService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;


@Service
public class PostServiceImpl implements PostService {

    @Value("${D:\\SLIIT\\Y3\\Sem 02\\PAF\\project\\JUN_WE_140\\backend\\strengthHUB\\src\\main\\resources\\PostImpUploads}")
    private String uploadDir;

    @Override
    public Post createPost(PostDTO postDTO) {

        Post post = new Post();
        return null;
    }

    @Override
    public PostDTO getPostById(Long postId) {
        return null;
    }
}
