/*import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setUploading(true);
      const response = await axios.post("YOUR_UPLOAD_URL", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onUpload(response.data.imageUrl);
    } catch (error) {
      console.error("Error uploading image: ", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
};

export default ImageUpload;*/