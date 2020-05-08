import {
  GET_POSTS,
  GET_POST,
  SET_LOADING,
  POSTS_ERROR,
  POST_ERROR,
} from "./types";
import axios from "axios";

// Get All Posts
export const getPosts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(
      "https://epower.ng/wp-json/wp/v2/posts?per_page=6&sort=created:asc"
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

// Get Single Post
export const getPost = (id) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(`https://epower.ng/wp-json/wp/v2/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
