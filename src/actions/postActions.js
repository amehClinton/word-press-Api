import { GET_POSTS, SET_LOADING, POSTS_ERROR } from "./types";
import axios from "axios";

// Get All Posts
export const getPosts = (pageNumber) => async (dispatch) => {
  try {
    setLoading();
    let res;
    if (pageNumber === 1) {
      res = await axios.get(
        "https://epower.ng/wp-json/wp/v2/posts?per_page=6&sort=created:asc/"
      );
    }

    if (pageNumber > 1) {
      res = await axios.get(
        `https://epower.ng/wp-json/wp/v2/posts?per_page=6&page=${pageNumber}&sort=created:asc`
      );
    }

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });

    return true;
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
    return false;
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
