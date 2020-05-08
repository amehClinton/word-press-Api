import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostItem = ({ post: { featured_image, title, id } }) => {
  return (
    <div className='card'>
      <div>
        {" "}
        <img src={featured_image} alt='' className='card-img' />
      </div>
      <h3 className='card-title'>{title.rendered}</h3>
      {/* <p className='card-p'>{this.props.user.excerpt.rendered}</p> */}

      <div>
        <Link to={`/post/${id}`} className='btn btn-primary btn-sm my-1 '>
          {" "}
          More
        </Link>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
