import {
  ADD_COMMMENT_FAILURE,
  ADD_COMMMENT_REQUEST,
  ADD_COMMMENT_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_FAILIURE,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_USER_POST_FAILURE,
  GET_USER_POST_REQUEST,
  GET_USER_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  
} from "./post.actionType";
import { api } from "../../config/api";

export const createPostAction = (postData) => async (dispatch) => {
  dispatch({
    type: CREATE_POST_REQUEST,
  });
  try {
    const { data } = await api.post("/api/posts/", postData);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data,
    });

    console.log("created post", data);
  } catch (error) {
    dispatch({ type: CREATE_POST_FAILURE, payload: error });
  }
};

export const getAllPostAction = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_POSTS_REQUEST,
  });
  try {
    const { data } = await api.get("/api/posts/");
    dispatch({
      type: GET_ALL_POSTS_SUCCESS,
      payload: data,
    });

    console.log("get all post", data);
  } catch (error) {
    console.log(error, "error");
    dispatch({ type: GET_ALL_POSTS_FAILIURE, payload: error });
  }
};

export const getUsersPostAction = (userId) => async (dispatch) => {
    dispatch({
      type: GET_USER_POST_REQUEST,
    });
    try {
      const { data } = await api.get(`/api/posts/user/${userId}`);
      dispatch({
        type: GET_USER_POST_SUCCESS,
        payload: data,
      });
  
      console.log("get user post", data);
    } catch (error) {
      console.log(error, "error");
      dispatch({ type: GET_USER_POST_FAILURE, payload: error });
    }
  };

  export const likePostAction = (postId) => async (dispatch) => {
    dispatch({
      type: LIKE_POST_REQUEST,
    });
    try {
      const { data } = await api.put(`/api/posts/like/${postId}`);
      dispatch({
        type: LIKE_POST_SUCCESS,
        payload: data,
      });
  
      console.log("like post", data);
    } catch (error) {
      console.log(error, "error");
      dispatch({ type: LIKE_POST_FAILURE, payload: error });
    }
  };
  
  export const deletePostAction = (postId) => async (dispatch) => {
    dispatch({
      type: DELETE_POST_REQUEST,
    });
    try {
      const { data } = await api.delete(`/api/posts/${postId}`);
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: data,
      });
  
      console.log("DELETE post", data);
    } catch (error) {
      console.log(error, "error");
      dispatch({ type: DELETE_COMMENT_FAILURE, payload: error });
    }
  };

//comments
export const createCommentAction = (reqData) => async (dispatch) => {
  dispatch({
    type: ADD_COMMMENT_REQUEST,
  });
  try {
    const { data } = await api.post(`/api/comments/post/${reqData.postId}`, reqData.data);
    dispatch({
      type: ADD_COMMMENT_SUCCESS,
      payload: data,
    });

    console.log("add comment", data);
  } catch (error) {
    dispatch({ type: ADD_COMMMENT_FAILURE, payload: error });
  }
};

export const deleteCommentAction = (commentId) => async (dispatch) => {
  dispatch({ type: DELETE_COMMENT_REQUEST });
  try {
    const { data } = await api.delete(`/api/comments/${commentId}`);

    console.log("delete COMMENT success", data);
    dispatch({ type: DELETE_COMMENT_SUCCESS, payload: data });
    
  } catch (error) {
    console.log("comment------", error);
    dispatch({ type: DELETE_COMMENT_FAILURE, payload: error });
  }
};
