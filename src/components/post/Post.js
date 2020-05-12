import React, { useEffect } from "react";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";
import { formatter } from "../../utils/Formatter";

import Moment from "react-moment";
import "moment-timezone";

import { connect } from "react-redux";

const Post = ({ post: { title, modified_gmt, featured_image, excerpt } }) => {
  //console.log(post);
  return (
    <div>
      <div className='card-title'>{title.rendered}</div>
      <p className='card-p'>
        {" "}
        Published on{" "}
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{modified_gmt}</Moment>
      </p>
      <div>
        <img src={featured_image} alt='' className='card-img' />
      </div>
      <div> {excerpt.rendered}</div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log("param id: ", state.post.posts);
  const post = state.post.posts.find(
    (postItem) => postItem.id === +props.match.params.id
  );
  return { post };
};

export default connect(mapStateToProps, null)(Post);
