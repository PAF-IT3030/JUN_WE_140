import axios from "axios";
import { API_BASE_URL, api } from "../../config/api";
import {
  DELETE_PROFILE_FAILURE,
  DELETE_PROFILE_REQUEST,
    DELETE_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("login success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("------", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (registerData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      registerData.data
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("register success!!!", data);
    dispatch({ type: REGISTER_SUCCESS, payload: data.token });
  } catch (error) {
    console.log("------", error);
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const updateProfileAction = (registerData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.put(
      `${API_BASE_URL}/api/users/`,
      registerData
    );

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("update profile", data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.token });
  } catch (error) {
    console.log("update------", error);
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
  }
};

export const getUserAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization : `Bearer ${jwt}`,
      },
    });

    console.log("get profile success", data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("profile------", error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error });
  }
};

export const deleteUserAction = (userId) => async (dispatch) => {
  dispatch({ type: DELETE_PROFILE_REQUEST });
  try {
    const { data } = await api.delete(`${API_BASE_URL}/api/users/${userId}`);

    console.log("delete profile success", data);
    dispatch({ type: DELETE_PROFILE_SUCCESS, payload: data });
    
  } catch (error) {
    console.log("profile------", error);
    dispatch({ type: DELETE_PROFILE_FAILURE, payload: error });
  }
};

export const logoutUserAction = () => async (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: "LOGOUT" });
}

