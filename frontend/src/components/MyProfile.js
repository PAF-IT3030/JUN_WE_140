import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfilePosts } from "../feature/checkProfile/checkProfileSlice";
import { getProfileInfo } from "../feature/checkProfile/checkProfileSlice";
import MealPostItem from "./MealPostItem";

function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.checkProfileReducer.postList);
  const userInfo = useSelector(
    (state) => state.checkProfileReducer.profileInfo
  );

  useEffect(() => {
    if (localStorage.getItem("psnToken") === null) {
      navigate("/unauthorized");
    }

    if (localStorage.getItem("psnUserId") !== null) {
      dispatch(getProfilePosts(localStorage.getItem("psnUserId")));
      dispatch(getProfileInfo(localStorage.getItem("psnUserId")));
    }
  }, []);

  return (
    <div>
      <h1 className="fw-bold text-center">My Plans</h1>
      {postList !== null ? (
        postList.map((postItem) => {
          return (
            <MealPostItem
              key={postItem.id}
              postId={postItem.id}
              userId={postItem.userId}
              firstName={userInfo.firstName}
              lastName={userInfo.lastName}
              dietaryType={postItem.dietaryType}
              recipesName={postItem.recipesName}
              nutritionalContent={postItem.nutritionalContent}
              ingredientContent={postItem.ingredientContent}
              cookContent={postItem.cookContent}
              loveList={postItem.love}
              shareList={postItem.share}
              commentList={postItem.comment}
              postDate={postItem.createdAt}
            />
          );
        })
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default MyProfile;
