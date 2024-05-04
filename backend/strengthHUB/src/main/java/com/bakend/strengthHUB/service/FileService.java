package com.bakend.strengthHUB.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {

    @Value("${file.upload.directory}")
    private String uploadDirectory;

    public ResponseEntity<byte[]> getFileByName(String fileName) {
        if (StringUtils.isEmpty(fileName)) {
            return ResponseEntity.badRequest().build();
        }

        // Construct the full file path
        Path filePath = Paths.get(uploadDirectory, fileName);

        try {
            // Read the file from the file system
            byte[] fileBytes = Files.readAllBytes(filePath);

            // Determine the file's media type based on its extension
            MediaType mediaType = determineMediaType(fileName);

            // Return the file bytes in the response body
            return ResponseEntity.ok().contentType(mediaType).body(fileBytes);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Determine the media type based on the file's extension
    private MediaType determineMediaType(String fileName) {
        String extension = StringUtils.getFilenameExtension(fileName);
        switch (extension) {
            case "jpg":
            case "jpeg":
                return MediaType.IMAGE_JPEG;
            case "png":
                return MediaType.IMAGE_PNG;
            case "gif":
                return MediaType.IMAGE_GIF;
            default:
                return MediaType.APPLICATION_OCTET_STREAM;
        }

    }

    // Determine the media type based on the file's extension

}
