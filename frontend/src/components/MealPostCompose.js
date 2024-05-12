import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import axios from "axios";
import imageCompression from "browser-image-compression";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Hashicon } from "@emeraldpay/hashicon-react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../feature/followingPost/followingPostSlice";
import { Routes } from 'react-router-dom';

function PostCompose() {
  const dispatch = useDispatch();
  const storeFollowingPosts = useSelector(
    (state) => state.followingPostReducer.followingPosts
  );

  const [userFullname, setUserFullname] = useState(
    localStorage.getItem("psnUserFirstName") +
      " " +
      localStorage.getItem("psnUserLastName")
  );
  const [userId, setUserId] = useState(localStorage.getItem("psnUserId"));

  const [recipesName, setRecipesName] = useState("");

  const [dietaryType, setdietaryType] = useState("");
  const [dietaryTypeCount, setdietaryTypeCount] = useState(0);

  const [nutritionalContent, setnutritionalContent] = useState("");
  const [nutritionalContentCount, setnutritionalContentCount] = useState(0);

  const [ingredientContent, setIngredientContent] = useState("");
  const [ingredientContentCount, setingredientContentCount] = useState(0);

  const [cookContent, setCookContent] = useState("");
  const [cookContentCount, setCookContentCount] = useState(0);

  const [disablePostButton, setDisablePostButton] = useState(true);
  const [file, setFile] = useState(null);
  const [file64String, setFile64String] = useState(null);
  const [file64StringWithType, setFile64StringWithType] = useState(null);

  function showSuccessMessage(inputMessage) {
    toast.success(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function showFailMessage(inputMessage) {
    toast.error(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  //Dietry cotent change
  function handleDietryContentChange(e) {
    setdietaryType(e.target.value);
  }

  //Recipes content change
  function handleRecipeContentChange(e){
    setRecipesName(e.target.value);
  }

  //Nutritional content change
  function handleNutritionalContentChange(e) {
    setnutritionalContent(e.target.value);

    setnutritionalContentCount(e.target.value.length);

    if (nutritionalContentCount === 0 || nutritionalContentCount > 500) {
      setDisablePostButton(true);
    } else {
      setDisablePostButton(false);
    }
  }
  //Ingredient content change
  function handleIngredientContentChange(e) {
    setIngredientContent(e.target.value);
    setingredientContentCount(e.target.value.length);
    if (ingredientContentCount === 0 || ingredientContentCount > 500) {
      setDisablePostButton(true);
    } else {
      setDisablePostButton(false);
    }
  }

  //Cook content change
  function handleCookContentChange(e) {
    setCookContent(e.target.value);

    setCookContentCount(e.target.value.length);
    if (cookContentCount === 0 || cookContentCount > 500) {
      setDisablePostButton(true);
    } else {
      setDisablePostButton(false);
    }
  }

  async function createPost(
    inputDietaryType,
    inputRecipesName,
    inputnutritionalContent,
    inputingredientContent,
    inputcookContent
  ) {
    try {
      const response = await axios({
        method: "post",
        url: "/api/v1/insertMealPost",
        headers: {
          Authorization: localStorage.getItem("psnToken"),
        },
        data: {
          id: null,
          userId: localStorage.getItem("psnUserId"),
          dietaryType: inputDietaryType,
          recipesName: inputRecipesName,
          nutritionalContent: inputnutritionalContent,
          ingredientContent: inputingredientContent,
          cookContent: inputcookContent,
          image: file64StringWithType,
          createdAt: null,
          love: null,
          share: null,
          comment: null,
        },
      });

      if (response.data !== null && response.data.status === "success") {
        showSuccessMessage("Created successfully!");
        //setdietaryType("");
        //setRecipesName("");
        //setnutritionalContent("");
        //setIngredientContent("");
        //setCookContent("");
        //setnutritionalContentCount(0);
        setCookContentCount(0);

        setDisablePostButton(true);
        setFile64String(null);
        setFile64StringWithType(null);
      }

      if (response.data !== null && response.data.status === "fail") {
        showFailMessage("Created failed. Please try again later!");
      }
    } catch (error) {
      showFailMessage("Created failed. Please try again later!");
    }
  }
  //upload the image file
  function onUploadFileChange(e) {
    setFile64String(null);
    if (e.target.files < 1 || !e.target.validity.valid) {
      return;
    }

    compressImageFile(e);
  }

  function fileToBase64(file, cb) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  }

  async function compressImageFile(event) {
    const imageFile = event.target.files[0];

    const options = {
      maxWidthOrHeight: 250,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      // input file is compressed in compressedFile, now write further logic here

      fileToBase64(compressedFile, (err, result) => {
        if (result) {
          setFile(result);
          //   console.log(file);
          //   console.log(String(result.split(",")[1]));
          setFile64StringWithType(result);
          setFile64String(String(result.split(",")[1]));
        }
      });
    } catch (error) {
      setFile64String(null);
      // console.log(error);
    }
  }

  async function handleCreatePost(e) {
    e.preventDefault();
    createPost(dietaryType,recipesName,nutritionalContent, ingredientContent, cookContent);
    dispatch(getFollowingPosts());
  }

  return (
    <div>
      {/* <h1>PostCompose component</h1> */}
      <h1>Set Up Your Workout Plan</h1>
      <div className="border rounded-3 border-success p-3 shadow">
        <ToastContainer />
        <Form className="d-flex flex-column">
          <Form.Group className="mb-3">
            <Form.Label>
              <div className="d-flex align-items-center mb-1">
                <div className="mx-3">
                  <Hashicon value={userId} size={60} />
                </div>
                <div className="fs-4 fw-bold">{userFullname}</div>
              </div>
            </Form.Label>

            <Form.Group>
              <Form.Label>
                Fitness Goal
              </Form.Label>
              <InputGroup className="mb-3">
              <Form.Control
                as="input"
                placeholder="Enter Fitness Goal"
            
                aria-label="Default select example"
                required
                Value={dietaryType}
                onChange={handleDietryContentChange}
              >
                {/* <option>Select One</option>
                <option value="vegetarian">vegetarian</option>
                <option value="vegan">vegan</option>
                <option value="keto">keto</option> */}
              </Form.Control>
              </InputGroup>

            </Form.Group>
            <Form.Group>
            <Form.Label>Goal-oriented Routines</Form.Label>

            <Form.Select>
                <Form.Select
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  required
                  onChange={handleRecipeContentChange}
                  Value={recipesName}
                />
                <option value="">Select Status</option>
                <option value="Weight Loss Routine">Weight Loss Routine</option>
                <option value="Muscle Building Routine">Muscle Building Routine</option>
                <option value="Endurance Training Routine">Endurance Training Routine</option>
                <option value="Flexibility Routine">Flexibility Routine</option>
              </Form.Select>

            </Form.Group>
            <Form.Group>
              <Form.Label>Exercise</Form.Label>
              <Form.Control
                as="textarea"
                row={4}
                placeholder="Enter Exercise Information"
                value={nutritionalContent}
                onChange={handleNutritionalContentChange}
                style={{ resize: "none", height: "4rem" }}
                required
              />
              <span>Characters: {nutritionalContentCount}/700</span>
              <Form.Group>
              <Form.Label>Set</Form.Label>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  row={4}
                  placeholder="Enter Set"
                  value={ingredientContent}
                  onChange={handleIngredientContentChange}
                  aria-label="With textarea"
                  style={{ resize: "none", height: "3rem" }}
                  required
                />
              </InputGroup>
              </Form.Group>
              <Form.Label>Repetitions</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"

                  row={4}
                  placeholder="Enter Repetitions"
                  value={cookContent}
                  onChange={handleCookContentChange}
                  aria-label="With textarea"
                  style={{ resize: "none", height: "3rem" }}
                  required
                />
              </InputGroup>
            </Form.Group>
          </Form.Group>
          <div className="d-flex justify-content-end align-items-center">
            <Button
              onClick={handleCreatePost}
              variant="success"
              disabled={disablePostButton}
              className="col-2 mx-3"
            >
              Create Workout Plans
            </Button>
          </div>
        </Form>
        {file64String !== null ? (
          <img src={file64StringWithType} alt="chosen" />
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default PostCompose;
