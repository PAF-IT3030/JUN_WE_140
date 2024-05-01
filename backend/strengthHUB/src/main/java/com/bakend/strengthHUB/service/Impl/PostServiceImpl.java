package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.dto.PostDTO;
import com.bakend.strengthHUB.entity.Post;
import com.bakend.strengthHUB.repo.PostRepository;
import com.bakend.strengthHUB.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;


@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;


    @Value("${file.upload.directory}")
    private String uploadDirectory;

    @Override
    public Post createPost(String title, String description, MultipartFile file) {
        try {
            // Generate a unique file name
            String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();

            // Save the file to the upload directory
            byte[] bytes = file.getBytes();
            Path path = Paths.get(uploadDirectory + fileName);
            Files.write(path, bytes);

            // Create a new post with the file path
            Post post = new Post();
            post.setTitle(title);
            post.setDescription(description);
            post.setFilePath(fileName); // Store the file path in the database

            // Save the post to the database
            // You need to inject your Post repository here and call save() method

            return postRepository.save(post);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Post> getAllPosts() {

        return postRepository.findAll();

    }
}
