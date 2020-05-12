import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostItem = ({ post: { featured_image, title, excerpt } }) => {
  return (
    <div className='card'>
      <div>
        {" "}
        <img src={featured_image} alt='' className='card-img' />
      </div>
      <h3 className='card-title'>{title.rendered}</h3>
      <p className='card-p'>{excerpt.rendered}</p>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
