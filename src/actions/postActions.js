import { GET_POSTS, SET_LOADING, POSTS_ERROR } from "./types";
import axios from "axios";

// Get All Posts
export const getPosts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(
      "https://epower.ng/wp-json/wp/v2/posts?per_page=5&sort=created:asc"
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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
