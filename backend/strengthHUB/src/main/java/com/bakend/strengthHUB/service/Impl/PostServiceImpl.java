package com.bakend.strengthHUB.service.PostService;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private PostService postService;

    @Value("D:\\SLIIT\\Y3\\Sem 02\\PAF\\project\\JUN_WE_140\\backend\\strengthHUB\\src\\main\\resources\\PostImpUploads")
    private String uploadDir;

    @Override
    public String uploadImage(MultipartFile file) throws IOException {
        // Check if the upload directory exists, if not create it
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate a unique file name to avoid conflicts
        String fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "_" + file.getOriginalFilename());

        // Save the file to the upload directory
        try (FileOutputStream fos = new FileOutputStream(uploadDir + File.separator + fileName)) {
            fos.write(file.getBytes());
        }

        // Return the file path
        return uploadDir + File.separator + fileName;
    }

    @Override
    public String uploadVideo(MultipartFile file) throws IOException {
        // Save video file logic
        return "";
    }

    @Override
    public Post createPost(PostDTO postDTO) {
        // Convert DTO to Entity and save
        return null;
    }

    @Override
    public PostDTO getPostById(Long postId) {
        // Fetch Post from repository and convert to DTO
        return null;
    }
}
