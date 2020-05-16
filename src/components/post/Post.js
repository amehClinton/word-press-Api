import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import { connect } from "react-redux";

const Post = ({ post: { title, modified_gmt, featured_image, content } }) => {
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
      <div>
        <pre>{content.rendered}</pre>{" "}
      </div>
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
