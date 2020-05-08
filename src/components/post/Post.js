import React, { useEffect } from "react";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPost } from "../../actions/postActions";

const Post = ({ post: { featured_image, modified_gmt }, loading, match }) => {
  useEffect(() => {
    getPost(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      {" "}
      <p className='card-p'>{modified_gmt}</p>
      <div>
        <img src={featured_image} alt='' className='card-img' />
      </div>
    </div>
  );
};

Post.propTypes = {
  loading: PropTypes.bool.isRequired,
  getPost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
