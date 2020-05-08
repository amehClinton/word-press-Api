import {
  GET_POSTS,
  GET_POST,
  SET_LOADING,
  POST_ERROR,
  POSTS_ERROR,
} from "./types";

// Get All Posts
const getPosts = async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`https://epower.ng/wp-json/wp/v2/posts/${id}`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Get All Posts
const getPost = async (dispatch) => {
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
      payload: err.response.statusText,
    });
  }
};

// Set Loading
const setLoading = () => dispatch({ type: SET_LOADING });
