import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfilePosts } from "../feature/checkProfile/checkProfileSlice";
import { getProfileInfo } from "../feature/checkProfile/checkProfileSlice";
import MealPostItem from "./MealPostItem";

function Profile() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.checkProfileReducer.profileId);
  const postList = useSelector((state) => state.checkProfileReducer.postList);
  const userInfo = useSelector(
    (state) => state.checkProfileReducer.profileInfo
  );

  useEffect(() => {
    if (userId !== null) {
      dispatch(getProfilePosts(userId));
      dispatch(getProfileInfo(userId));
    }
  }, []);

  return (
    <div>
      <h1>Post of someone</h1>
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
              image={postItem.image}
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

export default Profile;
